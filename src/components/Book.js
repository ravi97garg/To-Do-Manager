import React, {Component} from 'react';
import books from '../BooksJSON';

export default class Book extends Component{
    constructor(props) {
        super(props);
        this.state = books[props.match.params.id-1];
    }
    render(){
        let {title,
            isbn,
            pageCount,
            publishedDate,
            longDescription,
            thumbnailUrl,
            status,
            authors,
            categories
        } = this.state
        return (
            <div className='bookDetail'>
                <img src={thumbnailUrl} alt='book image'/>
                <h4>{title}</h4>
                <div>Published on {publishedDate.$date}</div>
                <p>{longDescription}</p>
                <div>ISBN: {isbn}</div>
                <div>Pages: {pageCount}</div>
                <div>Authors: {authors}</div>
                <div>Status: {status}</div>
                <div>categories: {categories}</div>
            </div>
        )
    }
}