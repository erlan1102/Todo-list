import React from 'react';
import ListItem from "./ListItem";

const List = ({item,setAll,all}) => {



    return (
        <ul className='folder__list'>
            {item.tasks.map((el)=>(
                <ListItem item={item} el={el} setAll={setAll} all={all}/>
            ))}
        </ul>
    );
};

export default List;