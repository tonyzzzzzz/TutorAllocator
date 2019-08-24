import React from 'react';
import {connect} from "dva";
import {Descriptions, Divider, Typography, List, Badge, Avatar} from "antd";

const {Text} = Typography;

const data = [
  {
    title: 'Mathematics',
  },
  {
    title: 'Geography',
  },
  {
    title: 'ESL',
  },
  {
    title: 'Graphics',
  },
];

class UserIndex extends React.Component{
  render() {
    return (
      <div>
        <Descriptions title="Student Info">
          <Descriptions.Item label="Name">Bill Liu</Descriptions.Item>
          <Descriptions.Item label="Telephone">(234)-567-9660</Descriptions.Item>
          <Descriptions.Item label="Status">Boarding Student</Descriptions.Item>
          <Descriptions.Item label="Tutor Group">12G4</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <Divider/>
        <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000', marginRight: '12px'}}> Available Tutors </Text>
        <Avatar style={{marginRight: '12px'}} src={"https://randomuser.me/api/portraits/women/12.jpg"}/>
        <Avatar style={{marginRight: '12px'}} src={"https://randomuser.me/api/portraits/women/24.jpg"}/>
        <Avatar style={{marginRight: '12px'}} src={"https://randomuser.me/api/portraits/women/34.jpg"}/>
        <Avatar style={{marginRight: '12px'}} src={"https://randomuser.me/api/portraits/women/98.jpg"}/>
        . . .

        <Divider/>
        <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000'}}> Current Allocation </Text>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<a key="list-loadmore-edit">Edit</a>, <a key="list-loadmore-edit">Show More</a>]}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Tutor: Unknown"
              />
              <div>
                <Badge status="success" /> Allocated
              </div>

            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default connect()(UserIndex)
