import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router";
import { ItemsCarousel } from "../Carousel";


export const Menu = ({ menus }) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <ItemsCarousel items={menus} nb_displayed={5} ItemComponent={MenuItem} />
            </Row>
        </Container>
    )
}

const MenuItem = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className="d-grid">
            <Button 
                onClick={() => {
                    navigate(item.route);
                }}
                variant="light"
                className={'bg-transparent border-0'}
            >
                {item.name}
            </Button>
        </div>
    );
}