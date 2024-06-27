import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
      id: 1,
      icon: 'fa-solid fa-chart-line',
      title: 'Cadastro de Metas',
      description: 'Com nosso aplicativo, você pode cadastrar suas metas e acompanhar seu progresso de maneira simples e eficiente. Estabeleça objetivos claros, como economizar para uma viagem dos sonhos e nós o ajudaremos a monitorar cada passo do caminho. Transforme planos em realidade com o poder de um controle financeiro inteligente ao seu alcance.'
    },
    {
      id: 2,
      icon: 'fa-solid fa-arrows-to-circle',
      title: 'Controle Financeiro',
      description: 'Facilite seu controle financeiro conosco. Nosso sistema intuitivo permite cadastrar suas receitas e despesas de maneira simples, sem a necessidade de subdivisões complexas. Assim, você pode gerenciar suas finanças com eficiência, mantendo o equilíbrio financeiro e focando no que realmente importa para alcançar seus objetivos.'
    },
    {
      id: 3,
      icon: 'fa-solid fa-users',
      title: 'Intuitivo',
      description: 'Nosso site foi cuidadosamente desenvolvido para ser intuitivo e acessível a todos. Com uma interface amigável e design simplificado, facilitamos o acesso a todas as funcionalidades essenciais para o controle financeiro e o gerenciamento de metas, sendo assim a melhor escolha para o seu controle pessoal!'
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