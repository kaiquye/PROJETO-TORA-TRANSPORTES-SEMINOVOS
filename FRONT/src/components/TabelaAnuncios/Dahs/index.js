
import { useContext, useEffect } from "react"
import { AuthContext as ContextAdm } from "../../../context/ContextAdm"
import React from 'react';
import { Chart } from "react-google-charts";
import Ativos from './verificar.png'
import Carro from './carro.png'
import Truck from './truck.png'
import carg from './carg.png'
import pub from './pulbic.png'
import './style.css'


export function Dahsboard() {
    let { QtsAnuncios } = useContext(ContextAdm)

    return (
        <section className='seciton-infosdados'>
            <div className='div-main-infos'>
             <div>
                <img src={pub} />
                    <p>Anuncios publicados</p>
                    <label>{QtsAnuncios.qts}</label>
                </div>
                <div>
                    <img src={Ativos} />
                    <p>Anuncios ativos</p>
                    <label>{QtsAnuncios.ativos}</label>
                </div>
                <div>
                   <img src={carg} />
                    <p>Quantidades de reboques</p>
                    <label>{QtsAnuncios.reboque}</label>
                </div>
                <div>
                <img src={Carro} />
                    <p>Quantidades de Carros</p>
                    <label>{QtsAnuncios.sedan}</label>
                </div>
                <div>
                <img src={Truck} />
                    <p>Quantidades de Caminhões'</p>
                    <label>{QtsAnuncios.truck}</label>
                </div>
            </div>
        </section>
    )
}