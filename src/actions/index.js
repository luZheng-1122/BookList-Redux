
//an action, trigger when click
export function selectBook(book) {
    console.log("a book has been selected" + book.title);

    //selectBook is an actionCreator, it needs to return an action
    //an object with a type property
    // dispatchtoprops 会获得这个object
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}