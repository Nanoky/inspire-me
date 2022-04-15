import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

export const Title = () => {
    const title = "Inspire Me";
    return (
        <Container>
            <Link to={"/"} className={"text-reset text-decoration-none"}>
                <h1 className="text-center">
                    {title}
                </h1>
            </Link>            
        </Container>
    )
}