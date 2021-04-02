import React, { Component } from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined,MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import {withRouter} from 'react-router-dom'

class SiderNav extends Component {
    state={
        selectedKeys:[]
    }

    allMenuClick=(obj)=>{
        this.setState({
            selectedKeys:[obj.key]
        })
        this.props.history.push(obj.key)
    }
    componentDidMount(){
        const {pathname} = this.props.history.location
        this.setState({
            selectedKeys:[pathname]
        })
        this.props.history.push(pathname)
    }
    componentDidUpdate(){
        
    }

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={this.state.selectedKeys} onClick={this.allMenuClick}>
                <Menu.Item key="/home" icon={<UserOutlined />}>
                首页
                </Menu.Item>
                <Menu.Item key="/nav" icon={<VideoCameraOutlined />}>
                nav 2
                </Menu.Item>
                <Menu.Item key="/nav2" icon={<UploadOutlined />}>
                nav 3
                </Menu.Item>
                <Menu.Item key="/4" icon={<UserOutlined />}>
                nav 4
                </Menu.Item>
                <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="/5">Option 5</Menu.Item>
                    <Menu.Item key="/6">Option 6</Menu.Item>
                    <Menu.Item key="/7">Option 7</Menu.Item>
                    <Menu.Item key="/8">Option 8</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        )
    }
}

export default withRouter(SiderNav)
