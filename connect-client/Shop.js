import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {
  useEffect(()=>{
    fetchItems();
  },[]);

  const[items, setItems] = useState([]);

  const fetchItems = async() => {
    const data = await fetch('http://localhost:3000/students');
    const items = await data.json();
    console.log('debug-1');
    console.log(items);
    console.log('debug-2');

    for(let i=0;i<items.length;i++){
      console.log(i + ":" + items[i]);
      var ob = items[i];
      
      console.log(ob.firstname);
    }

    const firstName = items.map(item => item.firstname);
    // console.log(firstName);
    setItems(firstName);

  };

   return (
    <ul>
        {items.map((prop, key) =>(
        <h5 key={key}>{prop}</h5>
      ))} 
  </ul>
  )

  // const elements = ['one', 'two', 'three'];
  // return (
  //   <ul>
  //     {elements.map((value, index) => {
  //       return <ul key={index}>{index}:  {value}</ul>
  //     })}
  //   </ul>
  // )


}

export default Shop;
