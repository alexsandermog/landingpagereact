import React from "react";
import './title.css'

interface ITitle{
    nome: string
}

function Title(props:any){
    return(
        <h1> CruzeirosNow{props.nome}</h1>
    );
    <img src="https://cdn-icons-png.flaticon.com/512/272/272866.png" alt="" />
}


export{Title};