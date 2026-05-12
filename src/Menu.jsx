import { useState } from "react";
import "./Menu.css";
function Menu() {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };
    const menu = [
        { id: 1, 
          title: "Burger",
          price: 500,
          description: "A delicious burger with all the fixings." },
        { id: 2, 
            title: "Pizza",
          price: 800,
          description: "A cheesy pizza with your choice of toppings." },
        { id: 3,
            title: "Salad",
          price: 300,
          description: "A fresh salad with your choice of dressing." },
        { id: 4,
            title: "Pasta",
            price: 400,
            description: "A hearty pasta dish with your choice of sauce." },
        { id: 5,
            title: "Biryani",
            price: 600,
            description: "A flavorful biryani dish with your choice of meat or vegetables." },
        { id: 6,
            title: "Sushi",
            price: 700,
            description: "A selection of fresh sushi rolls with your choice of fillings."},
        {id: 7, 
            title: "Ice Cream",
            price: 200, 
            description: "A sweet treat with your choice of flavors and toppings."}
        
        ];

    return (
        <div className="menu">
            <h1>Menu</h1>
            <ul>
                {menu.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>Rs {item.price}</h4>
     
        <button
             className="addToCart"
            type="button"
            onClick={() => addToCart(item)}>
            Add to cart
        </button>
                    </li>
                ))}
        
            </ul>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={`Rs${item.id}-${index}`}>
                        {item.title} - Rs {item.price}

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

