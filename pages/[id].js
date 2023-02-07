import Head from 'next/head'
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Container} from "@mui/material";
import AppBarQ from './Bar';


export default function Singlerecipe(singlerecipe) {
    const recipe  = singlerecipe.data.recipe;
    console.log(recipe)
    let result = recipe.data;
    // result = result.replace(/?<="<img")(.*)(?='>'/, "<br/>:ההכנה<br/>");
    result = result.replace(/כל הזכויות שמורות ©/, "");
    // result = result.replace(/מצרכים/, "<br/>:המצרכים<br/>");


    console.log(recipe);
    useEffect(()=>{
        function Change(){
            document.getElementById('change').innerHTML = result;
        }

            Change()

    },[])






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
                    <p className={"text-blue text-right float-right"}>  {recipe?.title}</p>
                    <span dir="ltr" id={"change"}  className={"text-blue text-right float-right"} ></span>

                </div>
                </Container>
            </main>


        </>
    )}


export async function getServerSideProps({ query }) {
    console.log("thiws is quert",query);


    const id = query.id

    const res = await axios.post("http://localhost:3000/../api/getbyid", {index:id});
    if (res.data){
        const data = await res.data
        // console.log("asdas",data)
        return { props: { data } }
    }
}
