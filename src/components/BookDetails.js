import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";


export default function BookDetails() {
    const { bookId } = useParams() // This here is used to make bookId as one of the parameters in the address.     
    const books = useContext(BooksContext) // In the BooksContext.js, there's a fetch for books.json. This context is used here. 
    const book = books.find(book => book.id === parseInt(bookId))

    if (books.length === 0) {
        return (<div>Loading...</div>)
    }

    if (!book) {
        return (<div><h1>Book not found!</h1></div>)
    }
    return (
        <div>
            <h1>{book.id}. {book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{book.description}</p>
        </div>
    )
}