import React, { useState } from "react";
import './Mycss.css';

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<>
		<div className="app">
			<button className="inc" onClick={()=> setCount(count+1)}>+</button>
			<button className="dec" onClick={()=> setCount(count-1)}>-</button>
			<button className="res" onClick={()=> setCount(0)}>Reset</button>
			<h2>{count}</h2>
		</div>	
		</>
	)
}

export default Counter;
