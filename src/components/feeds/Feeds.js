
import { useEffect, useReducer } from "react"

export const ACTION = {
    FETCH: 'fetch',
}

const Feeds = () => {
    const getDatas = async ()=>{
        const rawdata = await fetch("https://backendapi-production-4881.up.railway.app/api/auth/datas")
        const data = await rawdata.json()
        dispatch({type: ACTION.FETCH, payload: data})
    }
    const reducer = (state, action)=>{
        switch(action.type){
            case ACTION.FETCH:
                return action.payload
            default:
                return state
        }
        
    }
    const [state, dispatch] = useReducer(reducer, []);
    useEffect(()=>{
        getDatas()
        
    }, [])
    return (
      <div style={{display: 'flex', justifyContent: "center"}}>
      <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
      {state?.reverse().map((data, ind)=>{
          return<div key={ind}>
          <div >
            <h1>{data.username}</h1>
          </div>
          <div>
            {data.feed}
          </div>
          </div>
        })
        
    }
      </div>
      </div>
    )
}

export default Feeds