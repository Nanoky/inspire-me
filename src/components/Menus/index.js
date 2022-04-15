import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router";


export const Menu = ({menus}) => {

    const navigate = useNavigate();

    return (
        <Container>
            <Row className="row-cols-4 g-3 justify-content-center">
                {
                    menus.map((value, index) => (
                        <Col key={index} sm={2}>
                            <div className="d-grid">
                                <Button onClick={() => {
                                    navigate(value.route);
                                }}>
                                    {value.name}
                                </Button>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}