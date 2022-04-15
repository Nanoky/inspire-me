import { Col, Container, Row } from "react-bootstrap"
import { GalleryImage } from "../Image"


export const ImageGrid = ({ data }) => {

    return (
        <Container>
            <Row className="row-cols-4 g-3">
                {
                    data.map((value, index) => (
                        <Col key={index}>
                            <GalleryImage source={value.src} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}