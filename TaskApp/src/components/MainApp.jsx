import './MainApp.css';
import ListBox from './ResultBox.jsx';
import { useState } from 'react';
export default function ToDoApp() {

    function handleAdd(){
        (value.trim()!=null && value.trim()!=='')?setItems([...ListItemsArray,value]):alert('Please Enter Something !');
            setValue('');
    }


    const [ListItemsArray,setItems] = useState([]);

    const [value,setValue] = useState('');


 

    return (    
            <>

            <div className="todolist_box">
                <div className='todolist_box_left'>
                <h1 className='headerText'>My To-Do-List App</h1>
                </div>
                <div className='todolist_box_right'>
                    <input type="text" className="inputField" value={value} onChange={e=> setValue(e.target.value)} onKeyDown={e => (e.key === "Enter") &&  handleAdd() }></input>
                    <button className='addBtn' onClick={handleAdd}>Add </button>
                </div>
            </div>

            <ListBox itemsArray={ListItemsArray} setItems={setItems}></ListBox>


            </>
    );
}