import { Button, Container, FormControl, InputGroup } from "react-bootstrap"
import { FaSistrix } from 'react-icons/fa';


export const Searchbar = () => {

    return (
        <Container>
            <InputGroup>
                <FormControl
                    type="search"
                    placeholder="search"
                    className="bg-transparent"
                />
                <Button variant="secondary">
                    <FaSistrix />
                </Button>
            </InputGroup>
        </Container>

    )
}