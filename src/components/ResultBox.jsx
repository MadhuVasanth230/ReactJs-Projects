import ListItem from "./ListItem";

export default function ListBox({itemsArray,setItems}){
    return(
        <div className='todolist_items'>
            <ol>    
            
            {itemsArray.map( (x,index) =><ListItem name={x}  id={index} itemsArray={itemsArray} setItems={setItems} />)}
            

            </ol>
        </div>
    );
}