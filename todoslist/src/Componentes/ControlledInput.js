import React, { useState } from 'react';
import { BsX } from "react-icons/bs";

const ControlledInput = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [complete, setComplete] = useState("none")
    const deleteTask = i => {
        
        list.splice(i, 1);
        
        setList([...list])
        
    }
    const largolista = list.length

    

    return (
        <div>

            <div className="container">
                <h1 className="title"> todos</h1>
                <form className="inputedit" onSubmit={(evento) => {
                    evento.preventDefault();
                    setList(list.concat(task));
                    evento.target.task.value="";
                   
                }}>

                    <input  placeholder="New task"
                        name="task"
                        type="text"
                        onChange={(evento) => 
                        setTask(evento.target.value)
                        
                        }>

                              </input>
                </form>
                <ul>
                    
                   {list.length>0? 
                   list.map(function(task, i){
                    return <div className="border rounded"  key={i} ><li>{task}
                    <button className="cerrar" 
                    onClick={() =>deleteTask(i) }><BsX></BsX></button></li></div>})
                    
                    :<p className="empty">Empty list</p>}
                    
                </ul>
                <div className="larglist"> {largolista} Item left</div>

    


        </div>
</div>








)
}


export default ControlledInput;

/* <button onClick={() => this.removeItemFromArr(this.miarreglo,this.miarreglo[]) } ></button> */