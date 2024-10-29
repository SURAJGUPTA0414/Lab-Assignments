import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book, sell_book_action } from "./BookAction";

function BookContainer() {
    const noofbooks = useSelector(state => state.NumberofBooks);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>No of books: {noofbooks}</h1>
            <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
            <button onClick={() => dispatch(sell_book_action())}>Sell Book</button>
        </div>
    );
}

export default BookContainer;
