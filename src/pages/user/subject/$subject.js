import React from 'react';
import {Avatar, Badge, Descriptions, Divider, List, Typography, Row, Col, Drawer, Icon} from "antd";

const {Text} = Typography;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const data = [
  {
    title: 'Monday 15:00 - 17:00',
    status: 1
  },
  {
    title: 'Wednesday 15:00 - 17:00',
    status: 1
  },
  {
    title: 'Friday 15:00 - 17:00',
    status: 0
  },

];

const feedback = [{
  href: 'http://ant.design',
  title: `ant design part`,
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}];

const courseInfo = {
  english: {
    name: 'English - Grade 12',
    teacher: 'Mr. K. Matthews',
    code: 'K92',
    classroom: '1F4R',
    status: 'Enrolled',
  },
  maths: {
    name: 'Further Pure Mathematics - Grade 12',
    teacher: 'Mrs. J. Sims',
    code: '9KA',
    classroom: '3F2A',
    status: 'Enrolled',
  },
  cs: {
    name: 'Computer Science - Grade 12',
    teacher: 'Ms. C. Law',
    code: '91V',
    classroom: '1CA',
    status: 'Enrolled',
  },
};

export default class SubjectInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: Math.ceil(Math.random() * 100),
      visible: false,
    }
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  };

  render() {
    const info = courseInfo[this.props.match.params.subject];
    console.log(this.state);
    return (
      <div>
        <Drawer
          title="Jason White"
          placement="right"
          width={512}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Descriptions title="Information">
            <Descriptions.Item label="Name">Jason White</Descriptions.Item>
            <Descriptions.Item label="Role">Teacher</Descriptions.Item>
            <Descriptions.Item label="Office">3R5</Descriptions.Item>
            <Descriptions.Item label="Classroom">
              {info.classroom}
            </Descriptions.Item>
          </Descriptions>
          <Divider/>
          <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000', marginRight: '12px'}}> Office Hours </Text>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item actions={[<a disabled={item.status === 0}>Remind Me</a>]}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={<Badge status={item.status ? "success" : 'warning'} text={item.status ? "Free" : 'Busy'}/>}
                />
              </List.Item>
            )}
          />
        </Drawer>
        <Descriptions title="Course Info">
          <Descriptions.Item label="Course Name">{info.name}</Descriptions.Item>
          <Descriptions.Item label="Code">{info.code}</Descriptions.Item>
          <Descriptions.Item label="Status">{info.status}</Descriptions.Item>
          <Descriptions.Item label="Teacher">{info.teacher}</Descriptions.Item>
          <Descriptions.Item label="Classroom">
            {info.classroom}
          </Descriptions.Item>
        </Descriptions>
        <Divider/>
        <Row gutter={24}>
          <Col md={5}>
            <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000', marginRight: '12px'}}> Available Tutors </Text>
            <small>Click for details</small>
          </Col>
          <Col md={19}>
            <span onClick={()=>this.setState({visible: true})} style={{marginRight: '12px'}}>
              <Badge dot>
                <Avatar shape={"circle"} src={"https://randomuser.me/api/portraits/women/"+ this.state.id +".jpg"}/>
              </Badge>

            </span>
          </Col>
        </Row>

        <Divider/>
        <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000'}}> Upcoming </Text>
        <List
          dataSource={[]}
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
        <Divider/>
        <Text style={{fontWeight: 'bold', fontSize: '16px', color: '#000'}}> Feedback / Achievements </Text>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={feedback}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar shape={"circle"} src={"https://randomuser.me/api/portraits/women/"+ (this.state.id + 1) +".jpg"}/>
                }
                title={<a>Jennifer K.</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>

    );
  }
}
