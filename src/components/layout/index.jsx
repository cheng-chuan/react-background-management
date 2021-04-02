import React, { Component } from 'react'
import { Layout } from 'antd';
import SiderNav from './siderNav'
import Header from './header'

const { Content, Footer, Sider } = Layout;

export default class LayOut extends Component {
    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                    <div className="logo" />
                    <SiderNav/>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0',backgroundColor:'#fff' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>React后台管理系统@123</Footer>
                </Layout>
            </Layout>
        )
    }
}
