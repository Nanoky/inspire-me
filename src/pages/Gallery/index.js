import { useEffect, useState } from "react"
import { Container, Stack } from "react-bootstrap"
import { useParams } from "react-router"
import { Gallery } from "../../components/Gallery"
import { Menu } from "../../components/Menus"
import { Searchbar } from "../../components/Searchbar"
import { Title } from "../../components/Title"
import { getGalleryList, getPhotoList } from "../../services"


export const GalleryPage = ({menus}) => {
    const reloadGalleryList = false;
    
    const images = [
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
        {
            src: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
        },
    ];
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
            <Stack gap={4} className="mt-5">
                <Title />
                <Searchbar />
                <Menu menus={menus} />
                <Gallery images={photos} />
            </Stack>
        </Container>
    )
}