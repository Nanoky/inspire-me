import { Container, Row, Spinner } from "react-bootstrap"

export const Loader = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Spinner animation="border" />
            </Row>
        </Container>
    );
}