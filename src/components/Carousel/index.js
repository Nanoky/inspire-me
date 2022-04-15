import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./index.css";

export const ItemsCarousel = ({items, nb_displayed, ItemComponent}) => {
    const [start, setStart] = useState(0);

    let displayed = [];
    for (let index = start/*  - (start > 0) ? 1 : 0 */; index < start + nb_displayed/*  + (start + nb_displayed < items.length) ? 1 : 0 */; index++) {
        if (index < items.length)
            displayed.push(items[index]);
    }

    return (
        <Container fluid>
            <Stack direction="horizontal">
                <Button 
                    onClick={() => {
                        if (start > 0)
                            setStart(start - 1);
                    }}
                    className={"bg-transparent rounded-circle border-0"}
                >
                    <GrPrevious />
                </Button>
                {
                    displayed.map((item, index) => (
                        <ItemComponent key={index} item={item} />
                    ))
                }
                <Button 
                    onClick={() => {
                        if (start < items.length - nb_displayed)
                            setStart(start + 1);
                    }}
                    className={"bg-transparent rounded-circle border-0"}
                >
                    <GrNext />
                </Button>
            </Stack>
        </Container>
    );
}