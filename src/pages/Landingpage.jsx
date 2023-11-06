import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  //useNavigate is hook

  const navigate=useNavigate()

  const handleNavigate=()=>{

    //navigate to home

    navigate('home')


  }



  return (
    <div>

        <Row className='align-items-center'>
            <Col></Col>
            <Col lg={6}>
                <h1>Welcome Video.com</h1>
                <p style={{textAlign:'justify'}}>Where user can use their favourite videos user can upload any videos by copy and paste their url video.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now!!</p> 
                <button onClick={handleNavigate} className='btn btn-success'>Click here to know more</button>
            </Col>
            <Col lg={4}>
                <img className='img-fluid' src="https://tse4.mm.bing.net/th?id=OIP.3K64kSkCaopqrqvJYX_9hAHaFL&pid=Api&P=0&h=180" alt="no image" />

            </Col>

            <Col></Col>

        </Row>

    </div>
  )
}

export default Landingpage