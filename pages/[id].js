import Head from 'next/head'
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Container} from "@mui/material";
import AppBarQ from './Bar';


export default function Singlerecipe({id}) {
    const [isloading,setIsLoading] = useState(true)
    const [recipe,setRecipe] = useState()
    useEffect(()=>{
        async function Load(){
            const res = await axios.post("./api/getbyid", {index:id});
            setRecipe(res.data.recipe)
            setIsLoading(false)
            document.getElementById('change').innerHTML = res.data.recipe?.data;
        }
        Load()
    },[])

    // console.log(recipe)

    const inputStyles = "p-[20px] m-5 w-80";
    // document.write(recipe.data);

    return (
        <>
            <Head>
                <title>Main</title>
            </Head>
            <main>
            <AppBarQ/>
                <Container sx={{fontSize:"2em", marginTop:"12vh"}} maxWidth="sm">
                <div className={"pr-2 flex justify-center flex-col content-center flex-wrap"}>
                    {isloading ? <p>loading</p>:
                    <p className={"text-blue text-right float-right"}>  {recipe?.title}</p>}
                    <span dir="ltr" id={"change"}  className={"text-blue text-right float-right"} ></span>

                </div>
                </Container>
            </main>


        </>
    )}


export async function getServerSideProps({ query }) {
    console.log("thiws is quert",query);


    const id = query.id



        // console.log("asdas",data)
        return { props: { id } }

}
