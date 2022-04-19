import { Container, Stack } from "react-bootstrap"
import Skeleton from "react-loading-skeleton";
import { ImageGrid } from "../ImagesGrid";


export const Gallery = ({images, title, dataLoading}) => {
    return (
        <Container className="mb-5">
            <Container className="mb-5">
                <GalleryTitle title={title} />
            </Container>
            <ImageGrid data={images} dataLoading={dataLoading} />
        </Container>
    )
}

const GalleryTitle = ({title}) => {

    return (
        <h3 className="text-center">
        {
            title ? (
                <span>{title}</span>
            ) : (
                <Skeleton />
            )
        }
        </h3>
    )
}