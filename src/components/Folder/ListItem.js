import React from 'react';

const ListItem = ({item, el, setAll, all}) => {

    const doneHandlerTAsk = (id) =>{
        setAll(all.map((folder)=>{
            if (folder.id === item.id){
                return {...folder, tasks: folder.tasks.map((task)=>{
                        if (task.id === id){
                            return {...task, done: !task.done}
                        } else {
                            return task
                        }
                    })}
            } else {
                return folder
            }
        }))
    };

    const deleteHandlerTAsk = (id) =>{
        setAll(all.map((folder)=>{
            if (folder.id === item.id){
                return {...folder, tasks: folder.tasks.filter((task)=> task.id !== id)}
            } else {
                return folder
            }
        }))
    };

    return (
        <li className={`${el.done ? 'active' : ''} folder__list-item`} key={el.id}>
            <span className='folder__list-circle' onClick={()=> doneHandlerTAsk(el.id)}> </span>
            <span className='folder__list-item-text'>{el.name}</span>
            <span className='folder__list-delete' onClick={()=> deleteHandlerTAsk(el.id)}>✘</span>
        </li>
    );
};

export default ListItem;