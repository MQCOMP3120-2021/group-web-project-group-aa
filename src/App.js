import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/books").then((response) => {
            setBooks(response.data);
        });
    }, []);

    return (
        <div className="App">
            {
                books.map(f =>
                    <div>{f.name}</div>
                )
            }
        </div>
    );
}

export default App;
