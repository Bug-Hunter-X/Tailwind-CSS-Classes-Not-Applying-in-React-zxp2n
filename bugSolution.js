```javascript
//File:index.js
import { useState } from 'react';
import '../src/index.css'; //Ensure the css file is imported correctly

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
```