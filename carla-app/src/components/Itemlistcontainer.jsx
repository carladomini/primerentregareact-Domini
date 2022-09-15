import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount/itemCount";
import ItemList from "./ItemList/ItemList";

import Productos from "./Productos";
import { useParams } from "react-router-dom";

const Itemlistcontainer = ({props}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();


    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
              resolve(Productos);
            }, 1000);
        });

        if(categoriaId) {
            getData.then(res => setData(res.filter(Productos => Productos.category === categoriaId)));
        } else{
        getData.then(res => setData(res));
        }
    
    }, [categoriaId])

    const onAdd = (quantity) => {
      console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            
            <ItemList data={data}/>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default Itemlistcontainer;