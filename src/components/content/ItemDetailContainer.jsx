/* import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../layouts/ItemDetail';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase/config";


const ItemDetailContainer = () => {
const [producto, setItem] = useState([]);
const {id} = useParams();

useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
    .then((resp) => {
        setItem(
     { ...resp.data(), id: resp.id}   
        );
        })
}, [id]);

return (
<div className='main-container-producto'>
    <ItemDetail item={producto} />
</div>
);
}

export default ItemDetailContainer; */
import { useEffect, useState } from "react"
import ItemDetail from "../layouts/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer;