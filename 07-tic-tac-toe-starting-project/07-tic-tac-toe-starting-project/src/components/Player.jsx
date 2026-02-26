import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [name, setName] = useState(null);
    const [isActive, setIsActive] = useState(false);
    function handleisActive() {
        setIsActive(true);
    }

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function focusLost(){
        setIsActive(false);
    }

    return (
        <span className="player">
            {(isActive) ? <input type="text" 
            className="player-name"
            onBlur={focusLost}
            onChange={handleChangeName}></input>
            
            :
            <span className="player-name">{name ?? initialName}
            </span>}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleisActive}>Edit</button>
        </span>);
}