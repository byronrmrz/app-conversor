import React, { useState } from 'react';

export default function InsertNumber() {
const [usd, setUsd] = useState(0);
    const [amount, setAmount] = useState(0);
    const convertUsd = () => {
        console.log("Converting amount:", amount);
        const usd = amount / 8; 
        setUsd(Number(usd.toFixed(2)));
    }

  return (
    <div>
 
        <h1>Conversor de quetzales a Dolares</h1>
        <h2>Ingresa un monto para convertir</h2>
        <div className="input-container">
            <input 
            type="number" 
            placeholder="Monto en Q" 
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button className="button-insert" onClick={convertUsd}>Convertir a $</button>

            <input 
            type="number" 
            value={usd}
            readOnly
            />
        </div>


        
    </div>
  );
}