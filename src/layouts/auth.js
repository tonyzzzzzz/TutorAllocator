import {Layout, Card} from "antd";
import React from "react";
import styles from './auth.css';
import particleConfig from '../assets/particles.json';

const {Content, Footer} = Layout;


function AuthLayout(props) {
  return(
      <Layout className={styles.layout} >
        <Content>
          <div style={{ textAlign: "center", maxWidth: '428px', marginTop: '128px', marginLeft: "auto", marginRight: "auto"}}>
            <Card className={styles.card}>
              <div className={styles.logo}> Tutor Allocator </div>
              {props.children}
            </Card>
          </div>
        </Content>
        <Footer style={{textAlign: "center", backgroundColor: 'transparent', color:'rgba(205,205,225,0.95)'}}>
          Tony Zou ©2019
        </Footer>

      </Layout>

  );
}

export default AuthLayout;
