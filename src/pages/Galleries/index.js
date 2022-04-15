import { Container, Row, Spinner, Stack } from "react-bootstrap"
import { Menu } from "../../components/Menus"
import { Searchbar } from "../../components/Searchbar"
import { Title } from "../../components/Title"

export const GalleriesPage = ({ menus, menuLoading }) => {

    return (
        <Container fluid>
            <Stack gap={4} className="mt-5">
                <Title />
                <Searchbar />
                {
                    (menuLoading) ? (
                        <Row className="justify-content-center">
                            <Spinner animation="border" />
                        </Row>
                    ) : (
                        <Menu menus={menus} />
                    )
                }
            </Stack>
        </Container>
    )
}