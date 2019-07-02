import React, {Component} from 'react'
import {Form, Input, Icon, Button} from 'antd'
import './less/login.less'
import logo from './img/logo.png'
class Login extends Component{
    constructor(props){
        super(props)
    }
    handleSubmit = (e)=>{
        const {validateFields} = this.props.form
        e.preventDefault()
        validateFields({firstFields: ['username', 'password']}, (err, value)=>{
            if(err){
                console.log(value)
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form
        return (<div className="login">
            <header className="login-header">
                <img src={logo} alt="logo"/>
                <h1>React项目: 后台管理系统</h1>
            </header>
            <main className="login-content">
                <h1>用户登录</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        validateFirst: true,
                        rules: [
                            { required: true, message: '用户名不能为空!'},
                            { pattern: /[a-zA-Z0-9]+/, message: '用户名只能包含字母数字和下划线'},
                            { min: 4, message: '用户名最少不能低于4位'},
                            { max: 12, message: '用户名最多不能高于12位'}
                    ],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        validateFirst: true,
                        rules: [
                            { required: true, message: '用户名不能为空!'},
                            { pattern: /[a-zA-Z0-9]+/, message: '用户名只能包含字母数字和下划线'},
                            { min: 4, message: '用户名最少不能低于4位'},
                            { max: 12, message: '用户名最多不能高于12位'}
                        ],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    </Form.Item>
                </Form>
            </main>
        </div>)
    }
}
const WrapLogin = Form.create()(Login);
export default WrapLogin