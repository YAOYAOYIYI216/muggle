import { ComponentType, useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Form, { IFormRef, FormProps } from './form';
import FormItem from './formItem';
import Input from '../Input';
import Button from '../Button';
import { CustomRule } from './useStore';

const meta = {
  title: 'Form',
  component: Form,
  subcomponents: { 'Form.Item': FormItem as ComponentType<any> },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    // 表单标题
    name: '',
    // 表单初始值
    initialValues: undefined,
    // 表单提交成功
    onFinish: fn(),
    // 表单提交失败
    onFinishFailed: fn()
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;


/* 默认 */
export const DefaultForm: Story = {
  render: (args: FormProps)  => (
    <Form initialValues={{ username: 'yaoyaoyiyi', password: '' }} {...args}>
      <FormItem label="用户名" name="username" rules={[{ required: true, type: 'email' }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="密码" name="password" rules={[{ required: true, type: 'string', min: 3, max: 8 }]}>
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <div className='form-submit-area'>
        <Button type="submit" btnType='primary'> 登录 </Button>
      </div>
    </Form>
  )
};


const confirmRules: CustomRule[] = [
  { required: true, type: 'string', min: 3, max: 8 },
  ({ getFieldValue }) => ({
    asyncValidator(_, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      // 模拟异步校验
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue('password')) {
          reject('两次密码不相同，请输入相同的密码！')
        }
        setTimeout(resolve, 1000)
      })
      // 正常写法
      // if (value !== getFieldValue('password')) {
      //   return Promise.reject('两次密码不相同，请输入相同的密码！')
      // }
      // return Promise.resolve()
    }
  })
]

const ValidatorFormDom = (args: FormProps) => {
  const ref = useRef<IFormRef>(null)
  const resetAll = () => {
    ref.current?.resetFields();
    ref.current?.resetValidates();
  }
  return (
    <div style={{ width: '500px' }}>
      <Form ref={ref} initialValues={{ username: 'yaoyaoyiyi', password: '', confirmPwd: '', agreement: false, }} {...args}>
        {({ isValid, isSubmitting }) => (
          <>
            <FormItem label="用户名" name="username" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem label="密码" name="password" rules={[{ required: true, type: 'string', min: 3, max: 8 }]}>
              <Input type="password" placeholder="请输入密码" />
            </FormItem>
            <FormItem label="重复密码" name="confirmPwd" rules={confirmRules}>
              <Input type="confirmPwd" placeholder="请输入密码" />
            </FormItem>
           
            <div className="agreement-section" style={{ display: 'flex', justifyContent: 'center' }}>
              <FormItem
                name="agreement"
                valuePropName='checked'
                getValeueFromEvent={(e) => e.target.checked}
                rules={[{ type: 'enum', enum: [true], message: '请同意协议' }]}
              >
                <Input type="checkbox" />
              </FormItem>
              <span className="agree-text" style={{ lineHeight: '12px', marginLeft: '8px' }}>注册即代表你同意<a href='#'>用户协议</a></span>
            </div>
            <div className='form-submit-area'>
              <Button type="submit" btnType='primary'>登录 {isSubmitting ? '验证中' : '验证完毕'} {isValid ? '通过' : '不通过'}</Button>
              <Button type="button" onClick={resetAll}>重置</Button>
            </div>
          </>
        )}
      </Form>
    </div>
  )
};
/* 校验 */
export const ValidatorForm: Story = {
  render: ValidatorFormDom
};
