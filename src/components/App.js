// create your App component here
import React, { useEffect, useState } from "react"

// create your App component here
export default function App() {

    const [image, setImage] = useState(null)
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await response.json()
            setImage(data.message)
        }
        fetchData()

    }, [])

    if (!image) return <p>Loading</p>
    return <img src={image} alt="A Random Dog" />


}