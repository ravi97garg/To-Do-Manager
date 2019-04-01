import React from 'react';
import books from '../BooksJSON';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class BookList extends React.Component{
    constructor(){
        super();
        this.state = {books: books};
    }
    render() {
        return (
            <ul>
                {this.state.books.map((book) => {
                return (
                    <BookTemplate
                        title = {book.title}
                        shortDescription = {book.shortDescription}
                        thumbnailUrl = {book.thumbnailUrl}
                        id = {book._id}
                        key = {book._id}
                    />
                    )}
                )}
            </ul>
        )
    }
}

const BookTemplate = (props) => {
    let {title, shortDescription, thumbnailUrl, id} = props;
    return (
        <div>
            <img src={thumbnailUrl} alt={'Book image '+id}/>
            <h4>{title}</h4>
            <p>{shortDescription}</p>

            <Link to={`/book/${id}`}>View More</Link>
        </div>
    )

}