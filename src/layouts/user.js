import {Layout, Card, Menu, Icon} from "antd";
import React from "react";
import styles from './user.css';
import {Link} from "react-router-dom";

const {Sider, Content, Footer} = Layout;
const {SubMenu} = Menu;

function UserLayout(props) {

  return(
    <Layout className={styles.layout} >
      <Content className={styles.content}>
        <Layout className={styles.innerLayout}>
          <Sider width={200} style={{ background: '#fff', padding: '2px' }}>
            <Menu
              mode="inline"
              selectedKeys={[window.location.pathname]}
              defaultOpenKeys={['subjects']}
              style={{paddingTop: '12px'}}
            >
              <div className={styles.logo} />
              <Menu.Item key="/user"><Link to={"/user"}><Icon type="dashboard" />Dashboard</Link></Menu.Item>
              <SubMenu
                key="subjects"
                title={
                  <span>
                    <Icon type="book" />
                    Subjects
                  </span>
                }
              >
                <Menu.Item key="/user/subject/english"><Link to={"/user/subject/english"}>English</Link></Menu.Item>
                <Menu.Item key="/user/subject/maths"><Link to={"/user/subject/maths"}>Maths</Link></Menu.Item>
                <Menu.Item key="/user/subject/cs"><Link to={"/user/subject/cs"}>CS</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '34px', minHeight: 280 }}>{props.children}</Content>
        </Layout>
      </Content>
      <Footer style={{textAlign: "center", backgroundColor: 'transparent', color:'rgba(205,205,225,0.95)'}}>
        Tony Zou ©2019
      </Footer>
    </Layout>
  );
}

export default UserLayout;
