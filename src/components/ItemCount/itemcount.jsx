import React from "react";
import { useState } from "react";
import "./itemcount.css"

const ItemCount = ({initial, stock ,onAdd}) => {
    const [counter, SetCounter] = useState(initial)
    // stock = 5
    

    // onAdd = () => {
    //     alert(`Agregaste ${counter}`)
    // }

    //Counter
    const UpCount = () => {
        if(counter < stock){
            SetCounter(counter + 1)
        }
    }

    const DownCount = () => {
        if(counter > 1){
            SetCounter(counter - 1)
        }
    }

    return(
        <div className="ItemCount">
            <div className="CountButtons">
            <button onClick={UpCount}>+</button>
            <p>Cant:{counter}</p>
            <button onClick={DownCount}>-</button>
            </div>

            <div className="AddButton">
            <button onClick={onAdd}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount