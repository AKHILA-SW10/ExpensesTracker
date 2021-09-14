const counterReducer=(state=0,action)=>{
    console.log(action.type);
    switch(action.type){
        case "INC": 
        console.log("Increment");
        return state+1;
        case "DEC":
        console.log("Decrement");
        return state-1;
        default:
        console.log("default");
        return state;
    }
}

export default counterReducer;