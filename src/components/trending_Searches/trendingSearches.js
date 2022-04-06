import React, { useEffect, useState } from "react";
import getTrendingGifs from "../../services/getTrendigGifs";
import Category from "../category";

export default function TrendingSearches(){
    const [trends,setTrends]=useState([])
    useEffect(()=>{
        getTrendingGifs().then(setTrends)
    },[])
    return (
        <Category name='Trending' options={trends} />
    )
}