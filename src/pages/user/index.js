import React from 'react';
import {connect} from "dva";
import {Descriptions, Divider, Typography, Calendar, Badge} from "antd";

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
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'error', content: 'Maths - Jason Keith' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'English - Martin Jim' },
      ];
      break;
    case 15:
      listData = [
        { type: 'success', content: 'Physics - Bill' },
      ];
      break;
    default:
  }
  return listData || [];
}

class UserIndex extends React.Component{
  dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
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

        <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000'}}> Current Allocation </Text>
        <Calendar dateCellRender={this.dateCellRender} />
      </div>
    );
  }
}

export default connect()(UserIndex)
