import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import './Card.css'

const Home = ({open}) => {
    const url = 'https://api.facthunt.in/fostergem/v1/post/list/public'
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const tempData = [];
        axios
        .get(url)
        .then(
            res => {
                for(const dataObj of res.data.content){
                    tempData.push(dataObj)
                }
                setData([...tempData])
            }
        )
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className={open? 'active': 'container'}>
        {
            data.map(item => 
                <Card item={item} />
            )
        }
    </div>
  )
}

export default Home