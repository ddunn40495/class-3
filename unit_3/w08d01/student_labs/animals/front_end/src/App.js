import React from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
let baseURL = "http://localhost:3004";

console.log("current base URL:", baseURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };
  }
  getPets() {
    fetch(baseURL + "/pets")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => console.log(parsedData),
        (err) => console.log(err)
      );
  }
  componentDidMount() {
    this.getPets();
  }
  render() {
    return (
      <Container>
        <Row className='row-1'>
          <Col className='first-box'>
            <Card></Card>
          </Col>
          <Col className='second-box'>
            <Row className='inter-row-1'>
              <Col className='pet-headline'>
                <h3>PETS</h3>
              </Col>
              <Col className='breed-headline'>
                <h3>BREEDS</h3>
              </Col>
            </Row>
            <Row className='inter-row-2'>
              <Col className='dog-butt'>
                <Button>DOG</Button>
              </Col>
              <Col className='tzu-butt'>
                <Button>SHIH TZU</Button>
              </Col>
              <Col className='bull-butt'>
                <Button>BULLDOGS</Button>
              </Col>
            </Row>
            <Row className='inter-row-3'>
              <Col className='cat-butt'>
                <Button>CAT</Button>
              </Col>
              <Col className='gold-butt'>
                <Button>GOLDEN RETRIEVER</Button>
              </Col>
              <Col className='german-butt'>
                <Button>GERMAN SHEPHARD</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='row-2'>
          <Col className='third-box'>
            <Row className='pic-row'>
              <Col className='pic-div'></Col>
              <Col className='side-info'></Col>
            </Row>
            <Row className='form-row'>
              <Col className='pet-info'>
                <Form>
                  <Form.Group as={Col} controlId='formGridName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Name' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridAge'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type='age' placeholder='Age' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridDogOrCat'>
                    <Form.Label>DOG/CAT</Form.Label>
                    <Form.Control as='select' defaultValue='Choose...'>
                      <option>dog</option>
                      <option>cat</option>
                    </Form.Control>
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col className='info-list'></Col>
              <Col className='pet-info-2'></Col>
            </Row>
          </Col>
          <Col className='fourth-box'>
            <Row className='item-row1'>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className='item-row2'>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className='item-row3'>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
              <Col className='pet-box'>
                <div className='pet-pic'></div>
                <div className='info-text'>
                  <p>pet name</p>
                </div>
                <div className='icon-div'>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                  <Button className='small-butt' size='sm'>
                    Small
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
