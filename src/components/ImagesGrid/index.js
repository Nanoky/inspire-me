import { Col, Container, Row } from "react-bootstrap"
import { GalleryImage } from "../Image"
import { ItemsPagination } from "../Pagination"


/* export const ImageGrid = ({ data }) => {

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
} */

export const ImageGrid = ({ data }) => {
    const nb_item_row = 5
    const nb_item_page = 15;
    return (
        <Container>
            <ItemsPagination items={data} nb_item_page={nb_item_page} ItemComponent={ImageItemPagination} nb_item_row={nb_item_row} />
        </Container>
    )
}

const ImageItemPagination = ({item, ...props}) => {

    return (
        <GalleryImage source={item.src} {...props} />
    );
}