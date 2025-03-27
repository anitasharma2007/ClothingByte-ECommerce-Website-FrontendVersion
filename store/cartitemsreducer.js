const initialState=[]

const cartitemsreducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'AddItem':            
            return [...state,action.payload] 
        case 'RemoveItem':
            state=state.filter(x=>x.prodid!==action.payload.prodid)            
            return state
        case 'Clear':
            state=[]
            return state
        default:
            return state
    }
}

export default cartitemsreducer;