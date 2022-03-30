import { Formulario } from "../components/formualrioCriarAnuncio"
import './Style/Formulario.css'
import {useEffect, useState} from 'react'
import { PageLoading } from "../../src/components/PageLoading/PageLoading";
import { runWithAdal } from "react-adal";
import { authContext, getToken } from "../adalConfig/index";

export function NovoAnuncio(){

    const [pageLoadings, setPageLoading] = useState();

    useEffect(()=>{
        const DO_NOT_LOGIN = false;
        setPageLoading(true)
        runWithAdal(
        authContext,
        () => {
            setPageLoading(false)
        },
        DO_NOT_LOGIN
        );
    })


    return(<section className="page-novo-anuncio">
        <div>
            {pageLoadings ?  <PageLoading/> :  <Formulario/>}
           
        </div>
    </section>)
}