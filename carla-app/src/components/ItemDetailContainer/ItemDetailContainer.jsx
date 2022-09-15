import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import Productos from "../Productos";

import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

const [data, setData] = useState ({});
const { detalleId } = useParams(); 

useEffect (() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(Productos);
        }, 2000);
    });
    getData.then(res => setData(res.find(Productos => Productos.id === parseInt(detalleId))));   
}, [])


    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;