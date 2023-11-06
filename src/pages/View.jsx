import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../services/allapi'
import { useState } from 'react';


function View({serverRes}) {

  const [deletestatus,setDeletestatus]=useState(false)

  const [allVideos,setallVideos]=useState([])

  useEffect(() => {

    getAllVideos()
   
   
  }, [serverRes,deletestatus])

  const getAllVideos=async()=>{
   
    

  

   
  const response=await getVideo()
  setallVideos(response.data);
  }

  console.log(allVideos);

  const handledeleteStatus=(res)=>{

    setDeletestatus(res)

  }



  return (
    <div className='ms-5 border p-3 rounded'>

      <Row>
        {

          allVideos.map(video=>(

            <Col className='ps-3 mb-3' sm={12} md={6}>

        <Videocard card={video} handledeleteStatus={handledeleteStatus} />



        </Col>


          ))

        
        }

      </Row>

    </div>
  )
}

export default View