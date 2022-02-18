import React, { useState, useEffect } from 'react'
import Card from '../Card'
import axios from 'axios'

const Body = () => {

  const [First, setFirst] = useState([])
  const [Second, setSecond] = useState([])
  const [Third, setThird] = useState([])

  useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setFirst(response.data[0])
        setSecond(response.data[1])
        setThird(response.data[2])
        console.log(response.data[0]);
      })


  }, [])


  return (
    <div className='d-flex container'>
      <Card
        name={First.name}
        email={First.email}
        username={First.username}
        website={First.website}
        // street={First.address.street}
      />
      
      <Card
        name={Second.name}
        email={Second.email}
        username={Second.username}
        website={Second.website}
        // street={First.address.street}
      />
      <Card
        name={Third.name}
        email={Third.email}
        username={Third.username}
        website={Third.website}
        // street={First.address.street}
      />
    </div>
  )
}

export default Body