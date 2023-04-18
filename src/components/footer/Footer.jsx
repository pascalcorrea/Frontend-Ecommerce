import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../assets/logo/LOGO-VERDE-SF.png';
import "./footer.css"
import { BsInstagram, BsWhatsapp, BsFacebook  } from "react-icons/bs";

const Footer = () => {
  return (
    <div class='container-padre'>
      <Container>
        <Row>
          <Col>
            <div className='div'>
            <Row>
                <div className='container-image'>
                    <img src={Logo} alt="" className='logo-img'/>
                </div>
            </Row>
            </div>
          </Col>
          <Col>
            <div className='div'>
            <h1 className='redes' >Siguenos!</h1>
            <Col className='container-redes'>
              <a href="https://www.instagram.com/vapz_store/?hl=es">
              <BsInstagram style={{color: 'white', fontSize: '50px',  margin: 20 }} />  
              </a>
              <a href="">
              <BsWhatsapp style={{color: 'white', fontSize: '50px',  margin: 20 }} />
              </a>
              <a href="https://www.facebook.com/people/Vapz-Store/100071898523757/?paipv=0&eav=Afb-hqNwHwe_r_51yWjZ7h_wz2Vds-HonyZw67K95zpefeKNyVEWYecXSwv2rf1x-eU&_rdr">
              <BsFacebook style={{color: 'white', fontSize: '50px', margin: 20 }} />
              </a>
            </Col>
            </div>
          </Col>
          <Col>
            <div className='div'>
            <Row>
              <h1 className='important' >Important Links</h1>
              <a className='links' href="">Politica de privacidad</a>
              <a className='links' href="">Politica de devoluciones</a>
              <a className='links' href="">Contacto</a>
            </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;