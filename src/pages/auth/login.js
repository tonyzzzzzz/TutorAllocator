import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from "antd";

class AuthFrom extends React.Component{
  submit(){

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please enter your email' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passwd', {
            rules: [{ required: true, message: 'Please enter your password' }],
          })(
            <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item style={{textAlign: 'left', marginBottom: '10px'}}>
          {getFieldDecorator('rememberMe', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember Me</Checkbox>
          )}
          <a className="login-form-forgot" href="/auth/forget" style={{ float: 'right'}}>Forget your password?</a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const AuthLogin = Form.create()(AuthFrom);

export default connect()(AuthLogin);
