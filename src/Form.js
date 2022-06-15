import React, { useRef } from "react";

import User from "./User";

const Form = (props) => {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const nameRef = useRef();
  const ageRef = useRef();

  const addUser = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    const user = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge
    }

    props.onFormSubmit(enteredName, enteredAge);

    // setName('');
    // setAge('');
  }

  // const getName = (e) => {
  //   setName(e.target.value);
  // }

  // const getAge = (e) => {
  //   setAge(e.target.value);
  // }

  return (
    <>
      <form onSubmit={addUser}>
        <p>Add User</p>
        <label>Name: </label>
        <input 
          type='text'
          // value={name}
          // onChange={getName}
          ref={nameRef}
        />
        <label>Age: </label>
        <input 
          type='text'
          // value={age}
          // onChange={getAge}
          ref={ageRef}
        />
        <button type='submit' >Add</button>
      </form>
      <div>
        <p>USERS:</p>
        <ul>
          {props.users.length === 0 && <p>No Users added</p>}
          {props.users.length > 0 && props.users.map(user => (
            <User key={user.id} name={user.name} age={user.age}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Form;