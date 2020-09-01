import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'

function Search() {

    const [startDate, setStarDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate, 
        endDate: endDate,
        key: 'selection',
    }

    function handleSelect(ranges) {
        setStarDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            
        </div>
    )
}

export default Search
