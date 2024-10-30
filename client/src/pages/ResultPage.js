import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ExplorePage from './ExplorePage'

const ResultPage = (props) => {
    const [showcaseItems, setShowcaseItems] = useState(false)
    const location = useLocation()

    const data = location.state

    useEffect(() => {
        console.log(data.selectedOptions)
        if (data.selectedOptions.includes('Peer Case Studies')) {
            setShowcaseItems(true)
        }
    }, [])

    return (
        <div className='result-page'>
            {showcaseItems && <ExplorePage></ExplorePage>}
        </div>
    )
}

export default ResultPage
