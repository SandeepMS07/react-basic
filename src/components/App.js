import React  from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
// import TextInput from '../todo-list/TextInput';
// import RenderTodo from './RenderTodo';

function App() {

    return (
      <div>
        <Header/>
        {/* <AddContact/> */}
        {/* <ContactList/> */}
      </div>
    )



























  // const [todosList, setTodosList] = React.useState([])


  // return (
  //   <div style={{background:"green", height:"100vh", width: "100vw",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}> 
  //    <TextInput todosList  ={todosList} setTodosList={setTodosList} />
  //    {
  //      todosList.length  > 0 && (
  //        <RenderTodo todosList = {todosList} setTodosList={setTodosList}/>
  //      )
  //    }
  //   </div>
  // );
}

export default App;
