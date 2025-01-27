import React, { useEffect, useState } from 'react'

const useCustomHook = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);


    const fetchProducts = () =>{

        try{
            fetch("Link")
            .then(response=>response.json)
            .then(data=>setProducts(data))
            setErr(false);
            setLoading(false);
        
            }catch(error){
                setErr(true);
                console.log(error);
            }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

  return {loading, err, products, fetchProducts}
}

export default useCustomHook