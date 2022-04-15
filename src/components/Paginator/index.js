import { Pagination } from "react-bootstrap";

export const Paginator = ({nb_page, active, changePage}) => {

    let items = [
        <Pagination.First key={-2} onClick={() => {
            changePage(1);
        }} />,
        <Pagination.Prev key={-1} onClick={() => {
            if (active > 1)
                changePage(active - 1);
        }} />
    ];

    for (let index = 0; index < nb_page; index++) {
        items.push(
            <Pagination.Item 
                key={index} 
                active={(active) ? (index + 1 === active) : (index + 1 === 1)}
                onClick={() => {
                    changePage(index + 1);
                }}
            >
                {(index + 1)}
            </Pagination.Item>
        );       
    }

    items.push(
        <Pagination.Next key={nb_page + 1} onClick={() => {
            if (active < nb_page)
                changePage(active + 1);
        }} />
    );
    items.push(
        <Pagination.Last key={nb_page + 2} onClick={() => {
            changePage(nb_page);
        }} />
    );

    return (
        <div>
            <Pagination>
                {items}
            </Pagination>
        </div>
    )
}