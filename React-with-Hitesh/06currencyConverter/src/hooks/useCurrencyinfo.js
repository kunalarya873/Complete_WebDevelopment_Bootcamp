import { useState, useEffect } from "react";

function useCurrencyinfo(currency){
    const [data, setData] = useState({});
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect(() =>{
        fetch(url)
        .then((res)=>res.json())
        .then((res) => setData(res[currency])) 
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyinfo;