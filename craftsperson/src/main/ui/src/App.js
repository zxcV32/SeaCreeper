import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";


const QueryRecent = () => {

    const [recent, setRecent] = useState([]);

    const makeQuery = () => {
        axios.get("http://localhost:8084/api/http/recent").then(res => {
            console.log(res);
            setRecent(res.data);
        });
    };


    useEffect(() => {
        makeQuery();
    }, []);

    return recent.map((r, index) => {
        return (<div key={index}>
            <p>{r}</p>
            <br/>
        </div>);
    });
};

function App() {
    return (
        <div className="App">
            <QueryRecent/>
        </div>
    );
}

export default App;
