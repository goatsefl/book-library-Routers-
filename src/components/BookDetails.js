import React, { useContext, useEffect } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";


export default function BookDetails() {
    const { bookId } = useParams() // This here is used to make bookId as one of the parameters in the address.     
    const books = useContext(BooksContext) // In the books there's a fetch 
    const book = books.find(book => book.id === parseInt(bookId))


    return (<></>)
}