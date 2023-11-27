import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../layouts/ItemList'

const ItemListContainer = () => {

const {id} = useParams();

return (
<div className='main-container'>
    <ItemList categoria={id} />
</div>
);
}

export default ItemListContainer;