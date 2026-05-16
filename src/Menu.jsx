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

const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
        setCart(
            cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    } else {
        setCart([...cart, { ...item, quantity: 1 }]);
    }
};

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const quantity = cart.length;
    function removeFromCart(index) {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    }
    const menu = [
        { id: 1, 
          title: "Burger",
          price: 500,
          image: burgerimg,
          description: "A delicious burger with all the fixings." },
        { id: 2, 
            title: "Pizza",
          price: 800,
          image: pizzaimg,
          description: "A cheesy pizza with your choice of toppings." },
        { id: 3,
            title: "Salad",
          price: 300,
          image: saladimg,
          description: "A fresh salad with your choice of dressing." },
        { id: 4,
            title: "Pasta",
            price: 400,
            image: pastaimg,
            description: "A hearty pasta dish with your choice of sauce." },
        { id: 5,
            title: "Biryani",
            price: 600,
            image: biryaniimg,
            description: "A flavorful biryani dish with your choice of meat or vegetables." },
        { id: 6,
            title: "Sushi",
            price: 700,
            image: sushiimg,
            description: "A selection of fresh sushi rolls with your choice of fillings."},
        {id: 7, 
            title: "Ice Cream",
            price: 200, 
            image : icecreamimg,
            description: "A sweet treat with your choice of flavors and toppings."}
        
        ];

    return (
        <div className="menu">
            <h1>Menu</h1>
            <ul>
                {menu.map((item, index) => (
            <li key={`${item.id}-${index}`} className="cart-item">

              <img             src={item.image}
              alt={item.title}
              className="cart-image"
  />
            <div className="cart-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>Rs {item.price}</h4>
<div className="quantity-controls">
    <button
        className="removeFromCart"
        type="button"
        onClick={() => removeFromCart(item.id)}
    >
        -
    </button>

    <span className="quantity">
        {cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
    </span>

    <button
        className="addToCart"
        type="button"
        onClick={() => addToCart(item)}
    >
        +
    </button>
</div>
            </div>
                    </li>
                ))}
        
            </ul>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={`Rs${item.id}-${index}`}>
                        {item.title} - Rs {item.price} x {item.quantity} = Rs {item.price * item.quantity}

        <button
            className="removeFromCart"
            type="button"
            onClick={() => removeFromCart(index)}>
            Remove
        </button>


                    </li>
                ))}
            </ul>
            <p>Total: Rs {totalPrice}</p>
        </div>
    
    );
}

export default Menu;

