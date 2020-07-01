import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Card, Col, Row, Avatar } from 'antd';

export default function Home() {
  const [drivers] = useContext(AppContext)
  const { Meta } = Card;

  console.log(drivers);
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {drivers.map((driver) => (
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={driver.name}
                description={driver.phone}
              />
            </Card>
          </Col>
        ))}

      </Row>
    </div>
  )
}
