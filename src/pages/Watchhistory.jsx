import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allapi'

function Watchhistory() {

    const [history,sethistory]=useState([])

    const getwatchhistory=async()=>{
        
        //api call

      const {data}= await getHistory()

      sethistory(data)

     
    }

    console.log(history);

    useEffect(()=>{
        getwatchhistory()

    },[])



  return (
    <>
    <h1>Watch history</h1>

    <table className='table shadow m-3 border rounded'>
        <thead>
            <tr>
                <th>ID</th>
                <th>CARD NAME</th>
                <th>URL</th>
                <th>DATE</th>
            </tr>

        </thead>
        <tbody>{
            history?.map((item,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{item?.cardName}</td>
                <td>{item?.url}</td>
                <td>{item?.date}</td>
            </tr>

            ))
            }
           
        </tbody>
    </table>


    </>
  )
}

export default Watchhistory