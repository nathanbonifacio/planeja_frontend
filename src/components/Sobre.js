import img1 from '../images/img-section1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';
function Sobre() {
    return(
        <section id="sobre" className="block about-block">
            <Container fluid>
                <Row>
                <Col sm={12} md={4}>
                    <Image fluid src={img1} />
                </Col>
                <Col sm={12} md={8}>
                <div className="title-holder">
                <h2>Alcance seus objetivos!</h2>
                <div className="subtitle">Saiba mais sobre o App</div>
                </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                    <Link to='/metas' class="btn btn-success">Saiba Mais.</Link>
                </Col>
                </Row>
            </Container>
    </section>
    );
}

export default Sobre;