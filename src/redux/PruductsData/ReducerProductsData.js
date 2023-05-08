const initialState={
    Loading:false,
    Pruducts:[],
    error:""
}

const reducerProducts=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
         return{
            Loading:true,
            Pruducts:[],
            error:""
         }
        case "FETCH_SUCCESS":
            return{
                Loading:false,
                Pruducts:action.payload,
             }
        case "FETCH_FILURE":
            return{
                Loading:false,
                error:action.payload
             }
        default: return state
    }
}
export default reducerProducts