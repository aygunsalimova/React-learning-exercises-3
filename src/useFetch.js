import {useEffect, useState} from 'react'

const useFetch = (url1, url2) => {
    
    const [blogs, setblogs] = useState(null)
    // const [photos, setphotos] = useState(null)
    const [isPending, setisPending] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch(url1)
        .then(res => {
          if(!res.ok){
              throw Error('could not reach the fetch')
          }
          return res.json()
        })
        .then(data => {
          setblogs(data)
          setisPending(false)
          setError(null)
          console.log("re");
        })
        .catch(err => {
          setisPending(false)
          setError(err.messages)
        })
     
    }, [url1])

    return {blogs, isPending, error}
}
 
export default useFetch;