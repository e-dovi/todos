import { createSlice } from '@reduxjs/toolkit';

export const manageTodos = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodo: (state, action) => {
            
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            //console.log(state[0].key)
            return state.filter(todo => todo.key !== action.payload);
            //state.forEach(todo => console.log(`New ${todo.key}`))
          },
        // sortTodo
        sortTodo: (state, action) => {
            const sort=(o)=>{
                let swapping=true;
                let temp;
                while(swapping){
                    swapping=false;
                   for(let i=0; i<o.length-1; i++){
                    if(Number((Object.values(o[i])[0]))<Number((Object.values(o[i+1])[0]))){
                        temp=o[i]
                        o[i]=o[i+1]
                        o[i+1]=temp;
                        swapping=true;
                    }
                   }   
                }
            // return the sorted array
            
                return o;
            }
            state = sort(state)
        }
    }
})

export const selectTodos = (state) => state.todos;

export const {
    addTodo,
    removeTodo, sortTodo
} = manageTodos.actions;

export default manageTodos.reducer;