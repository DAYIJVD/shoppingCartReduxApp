const AddItem=(product)=>{
    return{
        type:"Add_Item",
        payload:product
    }
}
const RemoveItem=(product)=>{
    return{
        type:"Remove_Item",
        payload:product
    }
}
const Increase=(product)=>{
    return{
        type:"Increase",
        payload:product
    }
}
const Decrease=(product)=>{
    return{
        type:"Decrease",
        payload:product
    }
}
const Checkout=()=>{
    return{
        type:"Checkout"
    }
}
const Clear=()=>{
    return{
        type:"Clear"
    }
}
export {AddItem,RemoveItem,Increase,Decrease,Checkout,Clear}
