import React, {useState, useEffect} from 'react'
import './style1.css'

const getlocalData = () =>{
    const items= localStorage.getItem("myList");
     if(items){
        return JSON.parse(items)
     }else{
        return []
     }

}
const Todo = () => {
    const [inputList, setInputlist] = useState("")
    const [addList, setAddList] = useState(getlocalData())
    // add the items 
    const addItem = () => {
        if(!(inputList)){
            alert("Please add something")
        }
        else
        {
            const mynewIpdata = {
                id: new Date().getTime().toString(),
                name: inputList,

            }
            setAddList([...addList, mynewIpdata])
            setInputlist("")
        }
    }

    // delete Items 
    const deleteItems = (index) => {
        const updatedItems = addList.filter((curElem) => {
            return curElem.id !== index
        })
        setAddList(updatedItems) 
    }
    // remove all items on the list 
    const removeAll = () => {
        setAddList([]);
    }

    useEffect(()=>{
        localStorage.setItem("myList", JSON.stringify(addList))
    }, [addList]);
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="images/123.png" alt="notelogo" />
                <figcaption>Add your list here ✅</figcaption>
                <div className='addItems'>
                    <input 
                    type="text" 
                    placeholder='Add your items/notes ✍'
                    className='form-control'
                    value={inputList }
                    onChange={ (event) => setInputlist(event.target.value) }
                    />
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>
                {/* showItems */}
                <div className='showItems'>
                    {
                    addList.map ((curElem)=>{
                        return (
                            <div className='eachItem' key={curElem.id}>
                    <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                            
                            <i className="far fa-edit add-btn"></i>
                            <i className="fas fa-trash-alt add-btn" 
                            onClick = {() => deleteItems(curElem.id)
                            }></i>
                        </div>
                    </div>
                        )
                    })
                    }
                    
                </div>
                <div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Delete All" onClick={removeAll}>
                            <span>Add Items</span> 
                        </button>
                    </div>
                </div>
            </figure>
        </div>
      </div>
    </>
  )
}

export default Todo
