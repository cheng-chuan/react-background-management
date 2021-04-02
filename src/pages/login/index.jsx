import React, { Component } from 'react'
import { Form, Input, Button ,message} from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import './login.css'
import logo from './img/logo.png'

export default class Login extends Component {

    // 密码前台验证
    psdValidate=(ruler,value)=>{
        if(!value){
            return Promise.reject('请输入密码')
        }else if(value.length<4){
            return Promise.reject('密码长度不能少于4位')
        }else if(value.length>12){
            return Promise.reject('密码长度不能多于12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            return Promise.reject('密码由字母、数字以及下划线组成')
        }else{
            return Promise.resolve()
        }
    }

    // 表单提交时，验证成功的回调
    onFinish=(val)=>{
        const {username,password} = val
        if(username==='admin'&&password==='admin'){
            message.success('登陆成功')
            this.props.history.replace('/home')
        }else{
            message.error('用户名或密码错误')
            this.formRef.resetFields(['password'])
        }
    }

    // 表单提交时，验证失败的回调
    onFinishFailed=(val)=>{
        
    }


    render() {
        const layout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 25 },
          };
        return (
            <div className='container'>
                <header className='login-head'>
                    <img src={logo} alt="login"/>
                    <span>React:后台管理系统</span>
                </header>
                <div className='login-form'>
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            ref={c=>this.formRef=c}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                initialValue='admin'
                                rules={[{ required: true, message: '请输入用户名!' },
                                        { min: 4, message: '用户名最少输入4位!' },
                                        { max: 12, message: '用户名最多输入12位!' },
                                        { pattern: /^[a-zA-Z1-9_]+$/, message: '用户名由字母、数字以及下划线组成!' },
                                    ]}
                            >
                                <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}}/>}/>
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{validator:this.psdValidate }]}
                            >
                                <Input.Password prefix={<LockOutlined style={{color:'rgba(0,0,0,.25)'}}/>}/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" style={{'width':'100%'}} htmlType="submit">
                                登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
