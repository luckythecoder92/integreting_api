import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setData(response.data)
    console.log(data)
  }
  useEffect(() => {
    
  getData()
    
  }, [])
  
  return (
    <div className='p-10'>
      
      <button onClick={()=>{
        getData()
      }} className='bg-emerald-800 p-4 text-xl rounded-xl '>Get Data</button>
        <div className='  '>
          {data.map(function(elem, idx){
           return <div className='bg-gray-300 flex items-center justify-between m-5 w-full text-black px-7 py-6' key = {idx}>
                <img className='h-40' src={elem.download_url} alt="" />
                <h1>{elem.author}</h1>
           </div>
          })}
        </div>
    </div>
  )
}

export default App