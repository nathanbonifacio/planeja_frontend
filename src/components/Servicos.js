import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
      id: 1,
      icon: 'fa-solid fa-chart-line',
      title: 'Cadastro de Metas',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptates laboriosam laudantium provident sequi illum cupiditate beatae nam reiciendis velit magnam quos praesentium voluptate, consectetur totam at eligendi iure corporis.'
    },
    {
      id: 2,
      icon: 'fa-solid fa-arrows-to-circle',
      title: 'Intuitivo',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptates laboriosam laudantium provident sequi illum cupiditate beatae nam reiciendis velit magnam quos praesentium voluptate, consectetur totam at eligendi iure corporis.'
    },
    {
      id: 3,
      icon: 'fa-solid fa-users',
      title: 'Criativo',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptates laboriosam laudantium provident sequi illum cupiditate beatae nam reiciendis velit magnam quos praesentium voluptate, consectetur totam at eligendi iure corporis.'
    }
]

function Servicos(){
    return (
        <section id="servicos" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Serviços</h2>
          <div className="subtitle">Encontra no App</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={12} lg={4} >
                    <Card /*style={{ width: '22rem', height:'20rem', margin:'4px'  }}*/>
                        <Card.Body className="text-white text-center bg-dark pb-2">
                            <div className='icon'>
                                <i className= {services.icon} ></i>
                            </div>
                            <Card.Title>{services.title}</Card.Title>
                            <Card.Text>{services.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
    );
}

export default Servicos;