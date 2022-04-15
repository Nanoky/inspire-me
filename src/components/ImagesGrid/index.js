import { Col, Container, Row } from "react-bootstrap"
import { GalleryImage } from "../Image"
import { Loader } from "../loader"
import { ItemsPagination } from "../Pagination"

export const ImageGrid = ({ data, dataLoading }) => {
    const nb_item_row = 5
    const nb_item_page = 15;
    return (
        <Container>
            {
                (!dataLoading) ? (
                    <ItemsPagination items={data} nb_item_page={nb_item_page} ItemComponent={ImageItemPagination} nb_item_row={nb_item_row} />
                ) : (
                    <Loader />
                )
            }
        </Container>
    )
}

const ImageItemPagination = ({item, ...props}) => {

    return (
        <GalleryImage source={item.src} {...props} />
    );
}