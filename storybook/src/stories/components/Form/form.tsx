import React, { FC, ReactNode, createContext, forwardRef, useImperativeHandle } from 'react'
import useStore, { FormState } from './useStore'
import { ValidateError } from 'async-validator';
import PropTypes from 'prop-types';

export type RenderProps = (form: FormState) => ReactNode

export interface FormProps {
  // 表单标题
  name?: string;
  // 表单初始值
  initialValues?: Record<string, any>;
  // 表单内容
  children?: ReactNode | RenderProps;
  // 表单提交成功
  onFinish?: (values: Record<string, any>) => void;
  // 表单提交失败
  onFinishFailed?: (values: Record<string, any>, errors: Record<string, ValidateError[]>) => void;
}
export type IFormContext = Pick<ReturnType<typeof useStore>, 'dispatch' | 'fields' | 'validateField'> & Pick<FormProps, 'initialValues'>

export type IFormRef = Omit<ReturnType<typeof useStore>, 'dispatch' | 'fields' | 'form'>

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form = forwardRef<IFormRef, FormProps>((props, ref) => {
  const { 
    name = 'form',
    initialValues,
    children,
    onFinish,
    onFinishFailed
  } = props
  const { form, fields, dispatch, ...restProps } = useStore(initialValues)
  const { validateField, validateAllFields } = restProps
  useImperativeHandle(ref, () => {
    return {
      ...restProps
    }
  })
  const passedContext: IFormContext = { 
    dispatch,
    fields,
    initialValues,
    validateField
  }
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { isValid, errors, values } = await validateAllFields();
    if (isValid && onFinish) {
      onFinish(values)
    } else if (!isValid && onFinishFailed) {
      onFinishFailed(values, errors)
    }
  }

  let childrenNode: React.ReactNode = null;
  if (typeof children === 'function') {
    childrenNode = children(form)
  } else {
    childrenNode = children
  }
  return (
    <form name={name} className="form" onSubmit={submitForm}>
      <FormContext.Provider value={passedContext}>
        {childrenNode}
      </FormContext.Provider>
    </form>
  )
})

Form.propTypes = {
  // 表单初始值
  initialValues: PropTypes.object,
  // 表单标题
  name: PropTypes.string,
  // 表单提交成功
  onFinish: PropTypes.func,
  // 表单提交失败
  onFinishFailed: PropTypes.func,
}

export default Form;