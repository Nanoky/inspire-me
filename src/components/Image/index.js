import { Container, Image } from "react-bootstrap";


export const GalleryImage = ({source}) => {

    return (
        <Image src={source} fluid />
    );
}