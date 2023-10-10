import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import NavigationBar from '@/components/Navigation';
import CollapsibleExample from '@/components/Navigation'

let Home = () => {
  return (
    <main>
      <Container fluid>
        <Row className="">
          <Col className='' lg={12} md={12} sm={12}>
          <CollapsibleExample/>
          </Col>
        </Row>
      </Container>
    </main>

  );
};

export default Home;
