import React, {useEffect, useState} from "react";
import ViewedTasksItemToDoList from "../ItemToDoList";
import {nanoid} from "nanoid";
import ReactPaginate from "react-paginate";

import './style.scss'

function ViewedTasksPaginateList(props) {
    const {
        itemsPerPage,
        list,
        onDeleteCard,
        onChangeCard,
        onCheck,
        onViewing,
    } = props;

    const [currentItems, setCurrentItems] = useState(null);

    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const  endOffset = itemOffset + itemsPerPage;

        setCurrentItems(list.slice(itemOffset, endOffset));

        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const  handlePageClick = (event) => {
        const  newOffset = (event.selected * itemsPerPage) % list.length;

        setItemOffset(newOffset);
    };

    return(
        <>
            <div className={'viewed-tasks__paginate-list'}>
                <div>
                    {currentItems &&
                    currentItems.map((item) => {
                            return (<ViewedTasksItemToDoList
                                key={nanoid()}
                                item={item}
                                className={'viewed-tasks__item-to-do-list'}
                                onDeleteItem={onDeleteCard}
                                onChangeItem={onChangeCard}
                                onCheck={onCheck}
                                onClick={onViewing}
                                style={{marginBottom: 10}}
                            />)
                        }
                    )}
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={'page-listener'}
                pageClassName={'page-listener__page'}
                previousClassName={'page-listener__page'}
                nextClassName={'page-listener__page'}
                activeClassName={'page-listener__page_active'}
            />
        </>
    );
}

export default ViewedTasksPaginateList;