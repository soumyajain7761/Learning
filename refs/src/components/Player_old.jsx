import { useState } from 'react';

//without refs how to input value and on button click update the name value
export default function Player() {
  const [name, setName] = useState('unknown entity');
  const [inp, setInp] = useState('');

  const handleClick = (data) => {
    setName(data);
  }

  function handleChange(event){
    setName('unknown entity');
    setInp(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" onChange={handleChange} value={inp}/>
        <button onClick={() => {handleClick(inp)}}>Set Name</button>
      </p>
    </section>
  );
}
