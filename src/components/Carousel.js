import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

var heroData = [
  {
    id: 1,
    image: require ('../images/img-fundo.jpg'),
    title: 'Organização Financeira',
    /*description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, excepturi necessitatibus. Cupiditate, amet! Dicta libero modi odio non, omnis aperiam saepe quibusdam nostrum, qui aliquam a natus est recusandae culpa!',*/
    link: '/usuario'
  },
  {
    id: 2,
    image: require ('../images/img-fundo2.jpg'),
    title: 'Design Simplificado',
   /* description: 'Nosso site foi cuidadosamente desenvolvido para ser intuitivo e acessível a todos. Com uma interface amigável e design simplificado, facilitamos o acesso a todas as funcionalidades essenciais para o controle financeiro e o gerenciamento de metas!',*/
    link: 'https://www.google.com'
  },
  {
    id: 3,
    image: require ('../images/img-fundo3.jpg'),
    title: 'Tenha Controle de Suas Metas',
    /*description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, excepturi necessitatibus. Cupiditate, amet! Dicta libero modi odio non, omnis aperiam saepe quibusdam nostrum, qui aliquam a natus est recusandae culpa!',*/
    link: 'https://www.google.com'
  }
]

function UncontrolledExample() {
  return (
  <section className='hero-block'>
    <Carousel >
      {
        heroData.map(hero => {
          return(
            <Carousel.Item key={hero.id}>
              <img 
                className='d-block w-100'
                src={hero.image}
                alt={"Slide " + hero.id}
              />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>
                  {hero.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  </section>
  );
}

export default UncontrolledExample;