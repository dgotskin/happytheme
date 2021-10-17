//import '../node_modules/antd/lib/style/index.less';
import './happytheme.less';


// App specific
//import './App.less';


//Components
import { Button } from 'antd';
import { Row, Col } from 'antd';


function App() {
  return (
    <div className="App">
      <h1>Design system</h1>
      <h3>for Platform V</h3>
      <div className="colorplate">
        Sky 1
      </div>
      <div className="colorplate">
        Sky 2
      </div>
      <div className="colorplate">
        Sky 3
      </div>
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <p>Здесь пример текстовки длиной в 60-70 символов в одной строке, это крайне важно для повышения читаемости на портале и работы с интерфейсом. Обращаем на это правило самое пристальное внимание</p>
        </Col>
        <Col span={12}>
          <Button shape="round" size="large" type="primary">Primary Button</Button>
          <Button>Default Button</Button>
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
        </Col>
      </Row>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;
