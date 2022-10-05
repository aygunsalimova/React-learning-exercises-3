import {useEffect, useState} from 'react'

const useFetch = (url) => {
    // Here have a little bug when a request sends twice.
    // When I can find it I will send fix pr too.

    // useFetch is general hook and should work for all kind of calls
    // for that using var name as data is more recommendable than specific
    // like blogs or photos or something else.
    const [data, setData] = useState(null)
    // usually using isLoading as a name but isPending ok too.
    const [isPending, setIsPending] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        fetch(url)
            .then((res) =>
                // res.ok is always true.
                res.json())
            .then(data => {
                // set response data
                setData(data)
                // You don't need some extra actions here.
                // Because if error is true this part don't be called.
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                // Anyway setIsPending is false. Then why don't call it
                // inside finally block?
                setIsPending(false)
            })
    }, [url])

    return [data, isPending, error]
}

export default useFetch;