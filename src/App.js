import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
// import Loader from './Loader';
// import Counter from './Counter';
// import Form from './Form';
import Example from './Example';

export const ThemeContext = createContext();

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Example />
      </ThemeContext.Provider>
    </>
  )

  // const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  //     .catch(err => console.log(err))
  // }, [resourceType])


  // return (
  //   <div className="App">
  //     <button onClick={() => setResourceType('posts')}>Posts</button>
  //     <button onClick={() => setResourceType('users')}>Users</button>
  //     <button onClick={() => setResourceType('comments')}>Comments</button>
  //     <p>{resourceType}</p>
  //     {items.map(item => {
  //       return (<p>{JSON.stringify(item)}</p>)
  //     })}
  //   </div>
  // )


  // let users = [];

  // const addNewUser = (name, age) => {
  //   console.log(name, age)
  //   users = [
  //     ...users,
  //     {
  //       id: Math.random().toString(),
  //       name: name,
  //       age: age,
  //     }
  //   ]
  //   return users;
  // }

  // return (
  //   <div className="App">
  //     <Loader />
  //       <Counter />
  //       <Form onFormSubmit={addNewUser} users={users}/>
  //   </div>
  // );
}