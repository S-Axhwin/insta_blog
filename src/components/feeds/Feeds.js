
import { useEffect, useReducer } from "react"

export const ACTION = {
    FETCH: 'fetch',
}

const Feeds = () => {
    const getDatas = async (uri)=>{
        //const rawData = await fetch(uri, {mode:  'no-cors' })
        //console.log(rawData);
        //const Info = await rawData.json();
        //dispatch({type: ACTION.FETCH, payload: Info})
        console.log('getting info');
        const rawdata = await fetch(uri)
        console.log(rawdata);
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
        getDatas('https://backendapi-production-4881.up.railway.app/api/auth/datas')
        
    }, [])
    return (
      <div style={{display: 'flex', justifyContent: "center"}}>
      <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
      {state?.map((data, ind)=>{
          return<div key={ind}>
          <div >
            <h1>{data.username}</h1>
          </div>
          <div>
            {data.feed.map((feeds, index)=>(<li key={index}>{feeds}</li>))}
          </div>
          </div>
        })
        
    }
      </div>
      </div>
    )
}

export default Feeds