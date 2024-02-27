import {useState} from "react";

export default function ListItem({itemsArray,setItems, name,id}){

    function handleDelete(){
        itemsArray.splice(id,1);
        setItems([...itemsArray]);
    }


    function handleEdit(){

        setName(name);

        setoutlineColor(outlineColor === "rgb(11, 7, 245,0.8)" ? "transparent" : "rgb(11, 7, 245,0.8)");
        
        setBool(!boolVal);

        itemsArray.splice(id,1,itemName);

        setItems([...itemsArray]);

        setEdit(edit === "Edit" ? "Save" : "Edit");

    }


    function handleStatus(e){
        // setStatus(e.target.value);
        (e.target.value == ("Pending")?setColor('#FF5733'): e.target.value==("Completed")?setColor('#39FF14'):setColor('black'));

    }


    const [edit,setEdit] = useState("Edit");
    const [boolVal,setBool] = useState(false);
    const [outlineColor,setoutlineColor] = useState('transparent');
    const [itemName,setName] = useState('');
    const [color,setColor] = useState('black');
    // const [status,setStatus] = useState('Status');

    return (
        <div className="item_box">
            <div className="item_box_left">
            <li>
                <input key={id} contentEditable={boolVal} style={{outlineColor : outlineColor, color:color}} className="item"   value={(boolVal)?itemName:name} onChange={e => setName(e.target.value)} readOnly={!boolVal}/>
                <select name="status" className="status" onChange={handleStatus}>
                    <option value="status" >Status</option>
                    <option value="Pending"   className="statusPending" >Pending</option>
                    <option value="Completed" className="statusComplete">Completed</option>
                </select>
            </li>
            </div>
            <div className="item_box_right">
                <button onClick={handleEdit}>{edit}</button>
                <button onClick = {handleDelete} >Delete</button>
            </div>
        </div>
    );
}