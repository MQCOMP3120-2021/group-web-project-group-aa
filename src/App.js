import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);

    const getBooks = () => {
        axios.get("http://localhost:3001/api/books").then((response) => {
            setBooks(response.data);
        });
    }

    useEffect(getBooks, []);

    const addLike = (book) => () => {
        axios.put("http://localhost:3001/api/books/" + book.id, {
            name: book.name,
            comment: book.comment,
            like: book.like + 1
        }).then((response) => {
            getBooks();
        });
    }

    return (
        <div className="App">
            {
                books.map(book =>
                    <div>
                        <div>{book.name}</div>
                        <div>123</div>
                        <div>{book.comment}</div>
                        <div>{book.like}</div>
                        <button onClick={addLike(book)}>like this book</button>
                    </div>
                )
            }
        </div>
    );
}

export default App;
