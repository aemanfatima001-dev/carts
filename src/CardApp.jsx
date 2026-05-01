import React, { useState } from "react";

function CardApp() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");

  const addCard = () => {
    if (input.trim() === "") return;
    setCards([...cards, input]);
    setInput("");
  };

  const removeCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  return (
    <div>
      <h2>Card App</h2>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="text" value="password"/>

      <button onClick={addCard}>Add</button>

      {cards.map((card, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>{card}</p>
          <button onClick={() => removeCard(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CardApp;