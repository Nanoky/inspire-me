import { Container, Stack } from "react-bootstrap"
import { ImageGrid } from "../ImagesGrid";


export const Gallery = ({images, title, dataLoading}) => {
    return (
        <Container className="mb-5">
            <Container className="mb-5">
                <h3 className="text-center">{title ? title : "Gallery"}</h3>
            </Container>
            <ImageGrid data={images} dataLoading={dataLoading} />
        </Container>
    )
}