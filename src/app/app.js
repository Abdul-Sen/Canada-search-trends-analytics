import { useState } from "react"
import React from 'react'
const App = () => {
    
    const [count, setCount] = useState(1);

    return (
        <h1>App Component with state {count}</h1>
    )
}

export default App;