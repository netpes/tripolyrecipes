import Head from 'next/head'
import React, {useState} from "react";
import axios from "axios";
import {Container} from "@mui/material";


export default function Singlerecipe(singlerecipe) {
    const recipe  = singlerecipe.data.recipe;

    console.log(recipe);

    const inputStyles = "p-[20px] m-5 w-80";
    // document.write(recipe.data);

    return (
        <>
            <Head>
                <title>Main</title>
            </Head>
            <main>
                <Container sx={{fontSize:"2em"}} maxWidth="sm">
                <div className={"pr-2 flex justify-center flex-col content-center flex-wrap"}>
                    <span className={"whitespace-pre-line"}>{recipe.data}</span>
                    add regex for making and grtosories
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
        return { props: { data } }
    }
}
