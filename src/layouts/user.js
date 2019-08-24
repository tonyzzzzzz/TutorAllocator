import {Layout, Card} from "antd";
import React from "react";
import styles from './user.css';

const {Content, Footer} = Layout;


function UserLayout(props) {
  return(
    <Layout className={styles.layout} >
      <Content>
        <div style={{ maxWidth: '864px', marginTop: '128px', marginLeft: "auto", marginRight: "auto"}}>
          <Card className={styles.card}>
            <div className={styles.logo}> Tutor Allocator </div>
            <div className={styles.container}>
              {props.children}
            </div>

          </Card>
        </div>
      </Content>
      <Footer style={{textAlign: "center", backgroundColor: 'transparent', color:'rgba(205,205,225,0.95)'}}>
        Tony Zou ©2019
      </Footer>

    </Layout>

  );
}

export default UserLayout;
