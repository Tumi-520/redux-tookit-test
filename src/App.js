import React,{useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { add, down,asyncAdd } from './store/features/counterSlice'
import { loadDate } from './store/features/movieSlice'

function App() {
  const { count } = useSelector((state) => state.counter)
  const { list } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadDate())
  },[])
  return (
    <div className="App">
      <h1>{count}</h1>
      < button onClick={()=>dispatch(add({step:2}))}> + </button>
      < button onClick={()=>dispatch(down({step:1}))}> - </button>
      < button onClick={() => dispatch(asyncAdd())}> + </button>
      {
        list.map((item,index) => {
          return <div key={index}>
            <div>{ item.title}</div>
            <div>{ item.content}</div>
          </div>
        })
      }
    </div>
  );
}

export default App;
