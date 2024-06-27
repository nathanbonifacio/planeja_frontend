import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

var heroData = [
  {
    id: 1,
    image: require ('../images/img-fundo.jpg'),
    title: 'Venha fazer parte disso!!',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, excepturi necessitatibus. Cupiditate, amet! Dicta libero modi odio non, omnis aperiam saepe quibusdam nostrum, qui aliquam a natus est recusandae culpa!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require ('../images/img-fundo2.jpg'),
    title: 'Venha fazer parte disso!!',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, excepturi necessitatibus. Cupiditate, amet! Dicta libero modi odio non, omnis aperiam saepe quibusdam nostrum, qui aliquam a natus est recusandae culpa!',
    link: 'https://www.google.com'
  },
  {
    id: 3,
    image: require ('../images/img-fundo3.jpg'),
    title: 'Venha fazer parte disso!!',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, excepturi necessitatibus. Cupiditate, amet! Dicta libero modi odio non, omnis aperiam saepe quibusdam nostrum, qui aliquam a natus est recusandae culpa!',
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
                <a className='btn btn-success' href={hero.link}>Saiba Mais</a>
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