import './happytheme.less';

// App specific
import './App.less';


//Components
import { Row, Col, Button, Form, Input, Checkbox, Typography, Space, Card } from 'antd';
const { Title, Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      {/* ============ Стили тут ============  */}
      <div className="boxcard-md">
        <Title>Happy Theme for Design System</Title>
        <Text>Ant Design (default)</Text>
        <Text type="secondary">Ant Design (secondary)</Text>
      </div>

      <Row gutter={[32,32]}>
        <Col span="6">
          <div className="boxcard-lg filled">
            <Space direction="vertical" size="large" >

              <Title level={2}>h2. Ant Design</Title>
              <Title level={3}>h3. Ant Design</Title>
              <Title level={4}>h4. Ant Design</Title>
              <Title level={5}>h5. Ant Design</Title>


              <Text>Ant Design (default)</Text>
              <Text type="secondary">Ant Design (secondary)</Text>
              <Text type="success">Ant Design (success)</Text>
              <Text type="warning">Ant Design (warning)</Text>
              <Text type="danger">Ant Design (danger)</Text>
              <Text disabled>Ant Design (disabled)</Text>
              <Text mark>Ant Design (mark)</Text>
              <Text code>Ant Design (code)</Text>
              <Text keyboard>Ant Design (keyboard)</Text>
              <Text underline>Ant Design (underline)</Text>
              <Text delete>Ant Design (delete)</Text>
              <Text strong>Ant Design (strong)</Text>
              <Text italic>Ant Design (italic)</Text>
              <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
              </Link>
            </Space>
          </div>
        </Col>
        <Col span="6">
          <div className="boxcard-lg">
            <Space direction="vertical" size="large" >

              <Title level={2}>h2. Ant Design</Title>
              <Title level={3}>h3. Ant Design</Title>
              <Title level={4}>h4. Ant Design</Title>
              <Title level={5}>h5. Ant Design</Title>


              <Text>Ant Design (default)</Text>
              <Text type="secondary">Ant Design (secondary)</Text>
              <Text type="success">Ant Design (success)</Text>
              <Text type="warning">Ant Design (warning)</Text>
              <Text type="danger">Ant Design (danger)</Text>
              <Text disabled>Ant Design (disabled)</Text>
              <Text mark>Ant Design (mark)</Text>
              <Text code>Ant Design (code)</Text>
              <Text keyboard>Ant Design (keyboard)</Text>
              <Text underline>Ant Design (underline)</Text>
              <Text delete>Ant Design (delete)</Text>
              <Text strong>Ant Design (strong)</Text>
              <Text italic>Ant Design (italic)</Text>
              <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
              </Link>
            </Space>
          </div>
        </Col>
      </Row>















      {/* ============ Конец ============  */}
    </div>
  );
}

export default App;
