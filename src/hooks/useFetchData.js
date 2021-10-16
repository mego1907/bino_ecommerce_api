import { useState, useEffect } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true;

    setLoading(true)

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if(isMounted) {
          setData(data)
          setError(null)
        }
      })
      .catch((err) => {
        if(isMounted) {
          setData(null)
          setError(err)
        }
      })
      .finally(() => isMounted && setLoading(false))

    return () => (isMounted = false)
  }, [url])


  return { data, loading, error }
}

export default useFetchData
