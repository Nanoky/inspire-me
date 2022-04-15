import { useEffect, useState } from "react"
import { Container, Row, Spinner, Stack } from "react-bootstrap"
import { useParams } from "react-router"
import { Gallery } from "../../components/Gallery"
import { getPhotoList } from "../../services"


export const GalleryPage = () => {
    const [photos, setPhotos] = useState([]);
    const params = useParams();
    const [activeGallery, setActiveGallery] = useState(0); 
    const [title, setTitle] = useState("Gallery");

    useEffect(() => {
        if (params) {
            getPhotoList(params.galleryId).then((data) => {
                setPhotos(data);
            });
        }
    }, [params.galleryId]);
    return (
        <Container>
             <Gallery images={photos} />
        </Container>
    )
}