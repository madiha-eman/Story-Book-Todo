// import React, {useState} from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import Todos from './Todos';
// import './style.css'
// import List from './List';
// import Button from './Button';

// function AddTodo() {

//     const [todos, settodos] = useState([{title:'buy milk', id: 1},{title:'prepare tea', id: 2}])
//     const [task, settask] = useState({title:'', id:''})
//   const handleChange=(e)=>{
//       //  console.log('i am in handle change')
//         settask({title:e.target.value,id:uuidv4()})

//     }
//  const handleSubmit=(e)=>{
//      e.preventDefault();
//       //  console.log('i am in handle submit')
//         settodos([...todos, task])
//         e.target.firstChild.value='';

//     }
//     //console.log(task)
//      console.log(todos)
//     return (
//         <div className='form1'>
//             <h1>TODO APP</h1>
//             <form  onSubmit={handleSubmit}>
//                 <input className='input1' type='text' onChange={handleChange}></input>
//                 <Button text='Add' />
//             </form>
            
//             {/* <List /> */}
//             <Todos todolist = {todos}/>
//         </div>
//     )
// }

// export default AddTodo