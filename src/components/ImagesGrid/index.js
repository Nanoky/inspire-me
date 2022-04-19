import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Skeleton from "react-loading-skeleton";
import SkeletonTheme from "react-loading-skeleton/dist"
import { log } from "../../helpers/logger";
import { GalleryImage } from "../Image"
import { Loader } from "../loader"
import { ItemsPagination } from "../Pagination"

export const ImageGrid = ({ data, dataLoading }) => {
    const nb_item_row = 5
    const nb_item_page = 15;

    const [loaded, setLoaded] = useState({});

    var nb = 0;

    const imagesLoaded = (id) => {
        setLoaded({
            [id] : true,
            ...loaded
        });
        log(Object.keys(loaded).length);
    }
    return (
        <Container>
            {
                (!dataLoading) ? (
                    <Container>
                        <Container className={(Object.keys(loaded).length >= nb_item_page) ? "visually-hidden" : ""}>
                            <ItemsPagination items={data} nb_item_page={nb_item_page} ItemComponent={SkeletonItemPagination} nb_item_row={nb_item_row} />
                        </Container>

                        <Container className={(Object.keys(loaded).length < nb_item_page) ? "visually-hidden" : ""}>
                            <ItemsPagination items={data} nb_item_page={nb_item_page} ItemComponent={ImageItemPagination} nb_item_row={nb_item_row} onLoad={imagesLoaded} />
                        </Container>

                    </Container>

                ) : (
                    <Loader />
                )
            }
        </Container>
    )
}

const ImageItemPagination = ({ item, ...props }) => {

    return (
        <GalleryImage source={item.src} {...props} />
    );
}

const SkeletonItemPagination = ({ item }) => {

    return (
        <SkeletonTheme width="100%" height="150px">
            <Skeleton />
        </SkeletonTheme>
    );
}