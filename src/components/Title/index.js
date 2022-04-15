import { Container } from "react-bootstrap"


export const Title = () => {
    const title = "Inspire Me";
    return (
        <Container>
            <h1 className="text-center">
                {title}
            </h1>
        </Container>
    )
}