import {useSelector, useDispatch} from "react-redux"
import Nav from "./Nav";

function App() {
  const {count}  = useSelector((state)=>state.root)
  const dispatch = useDispatch();
  
  return (
    <>
      <Nav/>
      <div>I am from App Component</div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"INCREMENT_BY_VALUE", payload: 10})}>Increment By 10</button>
    </>
  );
}
export default App;
