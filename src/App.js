import React, { useState ,useEffect} from 'react';
import Todo from './Todo';
import { Button , AppBar,Toolbar,Typography} from '@material-ui/core';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] =useState('');

  // when the app loads , we  need to listen to the data base and fetch new todos ;
    
  useEffect(() =>{
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc=> ({id :doc.id ,todo: doc.data().todo})))
     })
  },[]);

  const addTodo = (event ) => {
    // this will  be running when we click our  button 
    event.preventDefault(); //it stops the site from refreshing time and again ....

    db.collection('todos').add({

      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })

    setTodos([...todos,input]);
    setInput('');   // clears the input window 
  }

  return (
    <div className="App">

<AppBar position="static" style ={{backgroundColor: "orange"}}>
  <Toolbar variant="dense">
    <Typography variant="h6" color = "#ffeb3b">
    📚 JUST TO DO 
    </Typography>
  </Toolbar>
</AppBar>
      <center>
      <h1> Just being silly </h1>
      
      <form>
      

      <FormControl>
  <InputLabel> ✔️ Write a todo</InputLabel>
  <Input  value={input} onChange={event =>setInput(event.target.value)} />
  
</FormControl>

      <Button  disabled={!input} onClick={addTodo} type = "submit" variant="contained" color="primary">
      ADD TODO 
      </Button>
    
      
      </form>

      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
          
        ))}
       
    
      </ul>
      </center>
    
    </div>
  );
}

export default App;
