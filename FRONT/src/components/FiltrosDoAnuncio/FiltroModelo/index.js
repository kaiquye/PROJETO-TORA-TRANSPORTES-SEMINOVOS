import "../style.css";
import { useContext, useState, useRef } from "react";

import scanialogo from '../image/R.png'
import IVECO from '../image/iveco_.png'
import DAF from '../image/DAF.png'
import VOLVO from '../image/VOLVO.png'
import MERCEDES from '../image/MERCA.png'
import VOLKS from '../image/VOLKS.png'
import MAN from '../image/MAN.png'
import Hy from '../image/Hy.png'
import toyota from '../image/toyota.png'
import FORD from '../image/FORd.png'
import Honda from '../image/HONDA.png'
import CHEV from '../image/chev.png'
import CASE from '../image/CASE.png'
import AGRALE from '../image/AGRALE.png'
import renault from '../image/renault.png'





export let Marca = function (props) {

    const ref_scania = useRef();
    const ref_volvo = useRef();
    const ref_daf = useRef();
    const ref_mercedes = useRef();
    const ref_iveco = useRef();
    const ref_case = useRef();
    const ref_agrale = useRef();
    const ref_ford = useRef();
    const ref_honda = useRef();
    const ref_toyota = useRef();
    const ref_hy = useRef();
    const ref_man = useRef();
    const ref_volks = useRef();
    const ref_renault = useRef();

    let mudarCor = (ref) => {
        if (ref.current.style.filter === 'grayscale(0)') {
            return ref.current.style.filter = 'grayscale(1)'
        }
        return ref.current.style.filter = 'grayscale(0)'
    }


    return (
        <div className="filtroModelo">
            <label>Marca</label><br />
            <section className="section-button-marcar">
                <div>
                    <button ref={ref_scania} className="marca-button"  onClick={(e) => {
                        props.setFabricante('SCANIA')
                        mudarCor(ref_scania)
                    }} value={'SCANIA'} ><img style={{ width: '60px' }} src={scanialogo} /></button>
                </div>
                <div>
                    <button ref={ref_iveco} className="marca-button" onClick={(e) => {
                        props.setFabricante('IVECO')
                        mudarCor(ref_iveco)
                    }} value={'IVECO'} ><img style={{ width: '60px' }} src={IVECO} /></button>
                </div>
                <div >
                    <button ref={ref_mercedes} className="marca-button" onClick={(e) => {
                        props.setFabricante('MERCEDES')
                        mudarCor(ref_mercedes)
                    }} value={'MERCERDES'} ><img style={{ width: '60px' }} src={MERCEDES} /></button>
                </div>
                <div>
                    <button ref={ref_daf} className="marca-button" onClick={(e) => {
                        props.setFabricante('DAF')
                        mudarCor(ref_daf)
                    }} value={'DAF'} ><img style={{ width: '60px' }} src={DAF} /></button>
                </div>
                <div   >
                    <button className="marca-button" ref={ref_volvo} onClick={(e) => {
                        props.setFabricante('VOLVO')
                        mudarCor(ref_volvo)
                    }} value={'VOLVO'} ><img style={{ width: '60px' }} src={VOLVO} /></button>
                </div>
                <div  >
                    <button className="marca-button" ref={ref_volks} onClick={(e) => {
                        props.setFabricante('VOLKS')
                        mudarCor(ref_volks)
                    }} value={'VOLKS'} ><img style={{ width: '60px' }} src={VOLKS} /></button>
                </div>
                <div  >
                    <button ref={ref_man} className="marca-button" onClick={(e) => {
                        props.setFabricante('MAN')
                        mudarCor(ref_man)
                    }}><img style={{ width: '60px' }} src={MAN} /></button>
                </div>
                <div   >
                    <button ref={ref_hy} className="marca-button" onClick={(e) => {
                        props.setFabricante('HY')
                        mudarCor(ref_hy)
                    }}  ><img style={{ width: '60px' }} src={Hy} /></button>
                </div>
                <div   >
                    <button ref={ref_toyota} className="marca-button" onClick={(e) => {
                        props.setFabricante('TOYOTA')
                        mudarCor(ref_toyota)
                    }} value={'TOYOTA'} ><img style={{ width: '60px' }} src={toyota} /></button>
                </div>
                <div   >
                    <button ref={ref_honda} className="marca-button" onClick={(e) => {
                        props.setFabricante('HONDA')
                        mudarCor(ref_honda)
                    }} value={'HONDA'} ><img style={{ width: '60px' }} src={Honda} /></button>
                </div>
                <div   >
                    <button ref={ref_ford} className="marca-button" onClick={(e) => {
                        props.setFabricante('FORD')
                        mudarCor(ref_ford)
                    }} value={'FORD'} ><img style={{ width: '60px' }} src={FORD} /></button>
                </div>
                <div   >
                    <button ref={ref_agrale} className="marca-button" onClick={(e) => {
                        props.setFabricante('AGRALE')
                        mudarCor(ref_agrale)
                    }} value={'AGRALE'} ><img style={{ width: '60px' }} src={AGRALE} /></button>
                </div>
                <div   >
                    <button ref={ref_case} className="marca-button" onClick={(e) => {
                        props.setFabricante('CASE')
                        mudarCor(ref_case)
                    }} value={'CASE'} ><img style={{ width: '60px' }} src={CASE} /></button>
                </div>
                <div>
                    <button ref={ref_renault} className="marca-button" onClick={(e) => {
                        props.setFabricante('RENAULT')
                        mudarCor(ref_renault)
                    }} value={'CASE'} ><img style={{ width: '60px' }} src={renault} /></button>
                </div>
            </section >
        </div >
    );
};