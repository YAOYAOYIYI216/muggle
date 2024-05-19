import React, { FC, ReactNode, useContext, useEffect } from 'react'
import classNames from 'classnames'
import { FormContext } from './form';
import { CustomRule } from './useStore'

export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

export interface FormItemProps {
  // 字段名
  name: string;
  // label 标签的文本
  label?: string;
  // 子组件
  children?: ReactNode;
  // 子节点的值的属性，checkbox 的是 'checked'
  valuePropName?: string;
  // 设置收集字段值变更的时机
  trigger?: string;
  // 设置如何将 event 的值转换成字段值
  getValeueFromEvent?: (e: any) => any;
  // 校验规则，设置字段的校验逻辑
  rules?: CustomRule[];
  // 设置字段校验的时机
  validateTrigger?: string;
}

export const FormItem: FC<FormItemProps> = (props) => {
  const {
    label,
    name,
    children,
    valuePropName = 'value',
    trigger = 'onChange',
    getValeueFromEvent = (e: any) => e.target.value,
    rules,
    validateTrigger = 'onBlur'
  } = props as SomeRequired<FormItemProps, 'getValeueFromEvent' | 'trigger' | 'valuePropName' | 'validateTrigger'>
  const { dispatch, fields, initialValues, validateField } = useContext(FormContext)
  const rowClass = classNames('row', {
    'row-no-label': !label
  })

  useEffect(() => {
    const value = (initialValues && initialValues[name]) || ''
    dispatch({
      type: 'addField',
      name,
      value: { label, name, value, rules: rules || [], errors: [], isValid: true }
    })
  }, [])
  // 获取store 对应的 value
  const fieldState = fields[name]
  const value = fieldState ? fieldState.value : ''
  const errors = fieldState ? fieldState.errors : []
  const isRequired = rules?.some((rule) => (typeof rule !== 'function') && rule.required)
  const hasError = errors && errors.length > 0
  const labelClass = classNames({
    'item-required': isRequired
  })
  const itemClass = classNames('form-item-control', {
    'form-item-has-error': hasError
  })
  const onValueUpdate = (e: any) => {
    const value = getValeueFromEvent(e)
    console.log('new vlaue', value)
    dispatch({
      type: 'updateValue',
      name,
      value
    })
  }
  const onValueValidate = async () => {
    await validateField(name)
  }
  // 手动的创建一个属性列表，需要有 value 以及 onChange 属性
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }
  // 获取 children 数组的第一个元素
  const childList = React.Children.toArray(children)
  // todo 判断 children 的类型，显示警告
  // 没有子组件
  if (childList.length === 0) {
    console.error('没有子组件')
  }
  // 子组件大于一个
  if (childList.length > 1) {
    console.error('子组件大于一个')
  }
  // 不是 ReactElement 的子组件
  if (!React.isValidElement(childList[0])) {
    console.error('不是 ReactElement 的子组件')
  }
  const child = childList[0] as React.ReactElement
  // 3 cloneElement, 混合这个child 以及 手动的属性列表
  const returnChildNode = React.cloneElement(
    child,
    { ...child.props, ...controlProps }
  )

  return (
    <div className={rowClass}>
      {
        label &&
        <div className="form-item-label">
          <label title={label} className={labelClass}>
            {label}
          </label>
        </div>
      }
      <div className="form-item">
        <div className={itemClass}>
          {returnChildNode}
        </div>
        {
          hasError &&
          <div className="form-item-explain">
            <span>{errors[0].message}</span>
          </div>
        }
      </div>
    </div>
  )
}

export default FormItem