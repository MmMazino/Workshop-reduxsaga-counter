import {useDispatch, useSelector} from "react-redux"
import './App.css'
import { ADD_REQ, DECREMENT_REQ, INCREMENT_ASYNC_REQ, INCREMENT_REQ } from './redux/actionType'


function App() {
  const dispatch = useDispatch()
  const action = (type: string,payload?:number)=>dispatch({type,payload})
  const counterReducer = useSelector(({counterReducer}) => counterReducer)
  return (
    <>
      <h1>Workshop redux-saga</h1>
      <button onClick={()=>action(INCREMENT_ASYNC_REQ)}>Increment after 1 second</button>
      <button onClick={()=>action(INCREMENT_REQ)}>Increment 1</button>
      <button onClick={()=>action(DECREMENT_REQ)}>Decrement 1</button>
      <button onClick={()=>action(ADD_REQ,10)}>Add 10</button>
      <div>Clicked: {counterReducer.count}</div>
    </>
  )
}

export default App
