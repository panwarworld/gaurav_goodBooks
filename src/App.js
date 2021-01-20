import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  JavaScript: [
    { nane:"Eloquent Javascript",img:"https://eloquentjavascript.net/img/cover.jpg" },
    { nane:"You Dont Know JavaScript",img:"https://images-na.ssl-images-amazon.com/images/I/71mKvD89oEL.jpg" },
  ],

  Startup: [
    {name: "Zero To One",img:"https://bit.ly/xdev-0-1"},
    {name: "Sprint",img:"https://bit.ly/xdev-sprint"},
    {name: "Hooked",img:"https://bit.ly/xdev-hooked"},
    {name: "Predictably Irrational",img:"https://bit.ly/xdev-pi"},
  
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Startup");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1><img src='https://cdn4.iconfinder.com/data/icons/planner-color/64/good-book-512.png' alt='goodbook icon' width='60'/> Goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#006DFF",
              color:"white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
            
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
      {bookDB[selectedGenre].map((book)=>(
                <img src={book.img} width='200' height='200' style={{display:'inline-block',margin:'0 0 0 2%'}} key={book.name} alt='logo'/>
            ))}
       
      </div>
    </div>
  );
}
