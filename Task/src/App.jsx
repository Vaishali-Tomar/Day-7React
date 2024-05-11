import { useState } from 'react';
//import "./App.css"
function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className='text-2xl text-blue-400 w-45 h-70 bg-gray-500 text-center mt-8 p-4 pb-4 shadow-black'>
      <div className="item">
        <h1 className='text-black text-3xl p-2 text-500'>Grocery Bud</h1>
        <form onSubmit={handleAddItem}>
          <input className='p-2 m-2 rounded-md' placeholder='select item'
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="text-black bg-blue-600 rounded-md p-2 m-2" type="submit">Add Item</button>
        </form>
      </div>
      <ul className='text-black'>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className='bg-blue-500 p-2 m-4 rounded-md' onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;