import React , {useState} from 'react' ;
import './Todo.css';
import { List , ListItem ,ListItemText,ListItemAvatar,Avatar,Modal} from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';


function Todo(props) {

    const [open , setOpen] = useState(false)

    // const handleOpen = () => {
    //     setOpen(true);
    // };
     
  

   

    return (
        <> 
        <Modal 
        open={open}
        onClose={e => setOpen(false)}
        >
            <div>
                <h1>
                     i am a model 
                </h1>
                <button onClick={e => setOpen(false)}></button>
            </div>
 
        </Modal>
        <List className = "todo_list">
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    
                </Avatar>
            </ListItemAvatar>
          <ListItemText primary = {props.todo.todo} secondary = "TODO"   />
        </ListItem> 
        <button onClick={e => setOpen(true)}>✏️</button> 
        <DeleteIcon onClick={event =>db.collection('todos').doc(props.todo.id).delete()}> ❌ Delete Me </DeleteIcon>
         </List>
         </>


        
    )
    
}

export default Todo
