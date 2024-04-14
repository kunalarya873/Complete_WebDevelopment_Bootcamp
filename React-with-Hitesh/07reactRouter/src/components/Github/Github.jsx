import React, { useEffect, useState } from 'react'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/kunalarya873')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (<div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>{data.name}
    <br/> <div className='text-center m-4 bg-gray-600 text-white text-xl text-wrap pl-0 ml-0'>{data.bio}</div>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
  )
}

export default Github