import React, { } from 'react';
import { Row, Col, Card } from 'antd';
import "antd/dist/antd.css";

let VoterInfoDetail = () => {
  console.log('in VoterInfoDetail')
  return (
    <Row gutter={24}>
      <Col span={4}>
        <Card title="Polling">Polling Stations</Card>
      </Col>
      <Col span={4}>
        <Card title="Laws">State Laws</Card>
      </Col>
      <Col span={4}>
        <Card title="Register">How to Register</Card>
      </Col>
      <Col span={4}>
        <Card title="FAQ">Am I Registered?</Card>
      </Col>
    </Row>

  )
}

export default VoterInfoDetail