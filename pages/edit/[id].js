import Head from 'next/head'
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Container} from "@mui/material";
import AppBarQ from '../Bar.js';


export default function EditRecipe({id}) {
    const [isloading,setIsLoading] = useState(true)
    const [recipe,setRecipe] = useState()
    const [text,setText] = useState("");
    useEffect(()=>{
        async function Load(){
            const res = await axios.post(".././api/getbyid", {index:id});
            setRecipe(res.data.recipe)
            setIsLoading(false)
            document.getElementById('change').innerHTML = res.data.recipe?.data;
        }
        Load()
    },[])

    async function Edit(){
        const res = await axios.post(".././api/edit", {id:id, text:text});
        console.log(res)
    }


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
                        <textarea dir="ltr" id={"change"}  className={"h-full text-blue text-right float-right block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} onChange={(x)=>setText(x.target.value)}></textarea>

                        <button onClick={Edit}>Submit </button>
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
