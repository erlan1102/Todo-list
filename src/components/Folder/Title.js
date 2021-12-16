import React from 'react';

const Title = ({item}) => {
    return (
        <h2 className='folder__title'>{item.folder}</h2>
    );
};

export default Title;