import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import { log } from "../../helpers/logger";
import { Paginator } from "../Paginator";

export const ItemsPagination = ({ items, nb_item_page, ItemComponent, nb_item_row, ...props }) => {
    const [current_page, setCurrentPage] = useState(1);
    const nb_page = Math.ceil(items.length / nb_item_page);
    let displayed_items = [];

    for (let index = (current_page - 1) * nb_item_page; index < (current_page) * nb_item_page; index++) {
        if (index < items.length)
            displayed_items.push(items[index]);
    }

    return (
        <Container>
            <Row className={`row-cols-${(nb_item_row) ? nb_item_row : 4} g-3`}>
                {
                    displayed_items.map((item) => (
                        <ItemComponent item={item} {...props} />
                    ))
                }
            </Row>
            <Row className="mt-4">
                <Paginator nb_page={nb_page} active={current_page} changePage={setCurrentPage} />
            </Row>
        </Container>
    )
}
