import { useEffect, useState } from "react"
import { TabelaAnuncios } from "../components/TabelaAnuncios"
import { PageLoading } from "../../src/components/PageLoading/PageLoading";
import { runWithAdal } from "react-adal";
import { authContext, getToken } from "../adalConfig/index";

export function Administrator(){

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

    return(
        <section>
            <div>
            {pageLoadings ? <PageLoading/> : <TabelaAnuncios/>}
            </div>
        </section>
    )
}