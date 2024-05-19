import { useState, useRef } from 'react';
import { Button, Input, Upload, Form } from './stories/components'
import { IFormRef } from './stories/components/Form/form';
import { CustomRule } from './stories/components/Form/useStore';
import { ValidateError } from 'async-validator';
import './stories/styles/index.scss';

function App() {
  const ref = useRef<IFormRef>(null);
  const initialValues = {
    username: 'yaoyaoyiyi',
    password: '',
    noLabel: '没有标题的',
    fileList: [],
    confirmPwd: '',
    agreement: false,
  }
  const [fileList, setFileList] = useState([])
  const onFinish = (values: Record<string, any>) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (values: Record<string, any>, errors: Record<string, ValidateError[]>) => {
    console.log('Failed:', values, errors);
  };
  const resetAll = () => {
    ref.current?.resetFields();
    ref.current?.resetValidates();
  }
  const onSuccess = (data, file) => {
    setFileList([...fileList, file])
  }
  const confirmRules: CustomRule[] = [
    { required: true, type: 'string', min: 3, max: 8 },
    ({ getFieldValue }) => ({
      asyncValidator(rule, value) {
        console.log('the value', getFieldValue('password'))
        console.log(value)
        // 模拟异步校验
        return new Promise((resolve, reject) => {
          if (value !== getFieldValue('password')) {
            reject('密码不匹配')
          }
          setTimeout(resolve, 1000)
        })
       
      }
    })
  ]
  const confirmFileRules: CustomRule[] = [
    { required: true, type: 'array' },
    ({ getFieldValue }) => ({
      asyncValidator(rule, value) {
        if (!fileList.length) {
          return Promise.reject('请上传文件')
        }
        return Promise.resolve()
      }
    })
  ]

  return (
    <div style={{ width: '500px', margin: '200px auto' }}>
      <Form
        ref={ref}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {({ isValid, isSubmitting }) => (
          <>
            <Form.Item label="用户名" name="username" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, type: 'string', min: 3, max: 8 }]}>
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item label="重复密码" name="confirmPwd" rules={confirmRules}>
              <Input type="confirmPwd" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item name="noLabel">
              <Input placeholder="no-label" />
            </Form.Item>
            <Form.Item label="文件" name="fileList" rules={confirmFileRules}>
              <Upload 
                action="" 
                multiple
                fileList={fileList}
                onSuccess={onSuccess}
              >
                <Button type="button">上传文件</Button>
              </Upload>
            </Form.Item>
            <div className="agreement-section" style={{ display: 'flex', justifyContent: 'center' }}>
              <Form.Item
                name="agreement"
                valuePropName='checked'
                getValeueFromEvent={(e) => e.target.checked}
                rules={[{ type: 'enum', enum: [true], message: '请同意协议' }]}
              >
                <Input type="checkbox" />
              </Form.Item>
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
}

export default App
