import { buy_book, sell_book } from "./BookTypes";

export const purchase_book = () => {
    return {
        type: buy_book
    };
};

export const sell_book_action = () => {
    return {
        type: sell_book
    };
};
