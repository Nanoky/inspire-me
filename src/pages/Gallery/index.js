import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import { Gallery } from "../../components/Gallery"
import { getPhotoList } from "../../services"


export const GalleryPage = ({ categories }) => {
    const [photos, setPhotos] = useState([]);
    const params = useParams();
    const [title, setTitle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (params) {
            getPhotoList(params.galleryId).then((data) => {
                setPhotos(data);
                setIsLoading(false);
            });
        }
    }, [params.galleryId]);

    useEffect(() => {
        if (categories.length > 0 && params) {
            setTitle(categories[params.index].name);
        }
    })
    return (
        <Container>
            <Gallery
                dataLoading={isLoading} 
                images={photos} 
                title={title}
            />
        </Container>
    )
}