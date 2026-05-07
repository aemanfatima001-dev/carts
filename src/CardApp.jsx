import React, { useState } from "react";
import "./App.css";

function CardApp() {
  const [cards, setCards] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Card
  const addCard = () => {
    if (title.trim() === "" || description.trim() === "") return;

    const newCard = {
      title,
      description,
    };

    // Update Card
    if (editIndex !== null) {
      const updatedCards = [...cards];
      updatedCards[editIndex] = newCard;

      setCards(updatedCards);
      setEditIndex(null);
    } else {
      // Add New Card
      setCards([...cards, newCard]);
    }

    // Clear Inputs
    setTitle("");
    setDescription("");
  };

  // Delete Card
  const removeCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  // Edit Card
  const editCard = (index) => {
    setTitle(cards[index].title);
    setDescription(cards[index].description);

    setEditIndex(index);
  };

  return (
    <div className="container">
      <div className="card-form">
        <h2>Card App</h2>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={addCard}>
          {editIndex !== null ? "Update Card" : "Add Card"}
        </button>
      </div>

      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>

            <p>{card.description}</p>

            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => editCard(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => removeCard(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardApp;