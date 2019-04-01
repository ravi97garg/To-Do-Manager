import React, {Component} from 'react';
import books from '../BooksJSON';
import './Book.css';

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
        } = this.state;
        return (
            <div className='bookDetail'>
                <h3>{title}</h3>
                <div className='caption'>Published on {publishedDate.$date}</div>
                <img src={thumbnailUrl} alt='book image'/>
                <p>{longDescription}</p>
                <div className='detail'><b>ISBN:</b> {isbn}</div>
                <div className='detail'><b>Pages:</b> {pageCount}</div>
                <div className='detail'><b>Authors:</b> {authors}</div>
                <div className='detail'><b>Status:</b> {status}</div>
                <div className='detail'><b>Categories:</b> {categories}</div>
            </div>
        )
    }
}