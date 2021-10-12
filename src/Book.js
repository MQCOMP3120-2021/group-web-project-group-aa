import './App.css';
import './Poem.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import bookService from "./Service/bookService";

function Book() {
    let {poemId} = useParams();

    const [book, setBook] = useState({});

    const upVote = () => {
        bookService.upVote(poemId).then((res) => {
            setBook(res.data);
        });
    }

    return (
        <div>
            {
                <div className="">
                    <div>{book.votes}</div>
                    <button onClick={upVote}>Up Vote</button>
                </div>
            }
        </div>
    );
}

export default Book;
