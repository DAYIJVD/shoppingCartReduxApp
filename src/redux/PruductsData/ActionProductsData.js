import axios from "axios"
const fetchRequest=()=>{
    return{
       type:"FETCH_REQUEST"
    }
}
const fetchSuccess=(pruducts)=>{
    return{
      type:"FETCH_SUCCESS",
      payload:pruducts
    }
}
const fetchFilure=(error)=>{
    return{
        type:"FETCH_FILURE",
        payload:error
    }
}

const fetchApi=()=>{
  return(dispatch)=>{
    dispatch(fetchRequest())
    axios.get("https://fakestoreapi.com/products/")
    .then(res=>{
        const products=res.data
        dispatch(fetchSuccess(products))
    })
    .catch(err=>{
        const errMsg=err
        dispatch(fetchFilure(errMsg))
    })
  }
    
}
export {fetchApi,fetchFilure,fetchRequest,fetchSuccess}