import { Container, Stack } from "react-bootstrap"
import { Menu } from "../../components/Menus"
import { Searchbar } from "../../components/Searchbar"
import { Title } from "../../components/Title"

export const GalleriesPage = ({menus}) => {

    return (
        <Container>
            <Stack gap={4} className="mt-5">
                <Title />
                <Searchbar />
                <Menu menus={menus} />
            </Stack>
        </Container>
    )
}