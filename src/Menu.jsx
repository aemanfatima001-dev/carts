import burgerimg from "./assets/burger.jpg";
import pizzaimg from "./assets/pizza.jpg";
import saladimg from "./assets/salad.jpg";
import pastaimg from "./assets/pasta.jpg";
import biryaniimg from "./assets/biryani.jpg";
import sushiimg from "./assets/sushi.jpg";
import icecreamimg from "./assets/icecream.jpg";
import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [cart, setCart] = useState([]);

  const menu = [
    {
      id: 1,
      title: "Burger",
      price: 500,
      image: burgerimg,
      description: "A delicious burger with all the fixings.",
    },
    {
      id: 2,
      title: "Pizza",
      price: 800,
      image: pizzaimg,
      description: "A cheesy pizza with your choice of toppings.",
    },
    {
      id: 3,
      title: "Salad",
      price: 300,
      image: saladimg,
      description: "A fresh salad with your choice of dressing.",
    },
    {
      id: 4,
      title: "Pasta",
      price: 400,
      image: pastaimg,
      description: "A hearty pasta dish with your choice of sauce.",
    },
    {
      id: 5,
      title: "Biryani",
      price: 600,
      image: biryaniimg,
      description: "A flavorful biryani dish with your choice of meat or vegetables.",
    },
    {
      id: 6,
      title: "Sushi",
      price: 700,
      image: sushiimg,
      description: "A selection of fresh sushi rolls with your choice of fillings.",
    },
    {
      id: 7,
      title: "Ice Cream",
      price: 200,
      image: icecreamimg,
      description: "A sweet treat with your choice of flavors and toppings.",
    },

  ];

const addToCart = (item) => {
  setCart((prevCart) => {
    const existing = prevCart.find((i) => i.id === item.id);

    if (existing) {
      return prevCart.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    }

    return [...prevCart, { ...item, quantity: 1 }];
  });
};

  

    const totalPrice = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
     0 
) || 0;
const removeFromCart = (id) => {
  setCart((prevCart) => {
    const existing = prevCart.find((i) => i.id === id);

    if (!existing) return prevCart;

    if (existing.quantity === 1) {
      return prevCart.filter((i) => i.id !== id);
    }

    return prevCart.map((i) =>
      i.id === id
        ? { ...i, quantity: i.quantity - 1 }
        : i
    );
  });
};    
    

    return (
        <div className="menu">
            <h1>Menu</h1>




    <ul>
        {menu.map((item) => (
          <li key={item.id} className="cart-item">
            <img className="cart-image" src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>Rs {item.price}</h4>
        <div className="quantity-controls">
  <button
    className="add"
    onClick={() => addToCart(item)}
  >
    +
  </button>

  <span className="quantity">
    {cart.find((i) => i.id === item.id)?.quantity || 0}
  </span>

  <button
    className="remove"
    onClick={() => removeFromCart(item.id)}
  >
    -
  </button>

</div>
          </li>
        ))}
      </ul> 
<div className="cart-card">
  <h2>🛒 Cart</h2>

{cart.length === 0 ? (
  <p>No items in cart</p>
) : (
  cart.map((item) => (
    <div key={item.id} className="cart-item-box">
      <img src={item.image} width="50" />
      <h4>{item.title}</h4>
      <p>Qty: {item.quantity}</p>
      <p>Rs {item.price * item.quantity}</p>
      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>

  ))
)}


  <hr />

<h3>Total: {totalPrice}</h3>
</div>

        </div>
    
    );
}

export default Menu;



