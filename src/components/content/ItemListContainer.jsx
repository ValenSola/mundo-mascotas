import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../layouts/ItemList';
import {collection, query, getDocs, where} from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {

      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoria])
    
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer;