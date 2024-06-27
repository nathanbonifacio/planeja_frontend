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
                    <p>Nosso aplicativo foi projetado para ajudar você a alcançar seus objetivos financeiros de maneira eficaz. Ao monitorar suas finanças, você pode identificar oportunidades de economia, otimizar seus gastos e aumentar suas economias. Com dados claros e gráficos precisos, você terá o poder de tomar decisões informadas que o aproximam cada vez mais das suas metas financeiras. Deixe-nos guiar você pelo caminho para o sucesso financeiro, tornando seus sonhos uma realidade.</p>
                    {/* <Link to='/metas' class="btn btn-success">Saiba Mais.</Link> */}
                </Col>
                </Row>
            </Container>
    </section>
    );
}

export default Sobre;