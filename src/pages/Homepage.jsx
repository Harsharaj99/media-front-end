import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'



function Homepage() {


  //create a state

  const[serverRes,setserverRes]=useState({})

  //create a function

  const handleresponse=(res)=>{

    setserverRes(res)

  }





  return (
   <>
      <div>

        <div className='d-flex justify-content-between'>
          <h1 className='text-info ms-5 mb-5'>All VideoCard</h1>
          <Link to={'/watchhistory'} style={{textDecoration:'none',fontSize:"30px",color:"blue"}}>Watch history</Link>
  
        </div>
        <div className='container-fluid'>
          <Row className='mt-5'>

            <Col lg={1}>
              {/* selector of add */}
              <Add handleresponse={handleresponse}/>
            </Col>

            <Col lg={7}>
              {/* selctor of view */}
              <View serverRes={serverRes}/>
            </Col>

            <Col lg={4}>
              {/* selector of category */}
              <Category/>
            </Col>

          </Row>

        </div>

        
      </div>
   </>
  )
}

export default Homepage