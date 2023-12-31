import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

function useRecipe() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
    
        const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
          if (snapshot.empty) {
            setError('No recipes to load')
            setIsPending(false)
          } else {
            let results = []
            snapshot.docs.forEach(doc => {
              // console.log(doc)
              results.push({ ...doc.data(), id: doc.id })
            })
            setData(results)
            setIsPending(false)
          }
        }, err => {
          setError(err.message)
          setIsPending(false)
        })
    
        return () => unsub()
    
      }, [])
  return {error , data, isPending}
}

export default useRecipe