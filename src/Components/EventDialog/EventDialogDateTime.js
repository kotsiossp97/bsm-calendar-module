import React from 'react'
import { createIcsFile } from '../../Utils/Functions'

const EventDialogDateTime = ({eventData}) => {
    const handleAddToCalClick = () => {
        createIcsFile(eventData)
    }

    return (
        <div className='dateTimeContainer'>
            <h3>DATE AND TIME</h3>
            <span>
                {new Date(eventData.EventStartDate).toLocaleDateString("default", { month: "short", weekday: "short", day: "2-digit", year: "numeric"})} - {eventData.FullDayEvent?"Full Day Event":"Not Full Day Event"}
            </span>
            <span className='eventLink' onClick={handleAddToCalClick}>Add to Calendar</span>
        </div>
    )
}

export default EventDialogDateTime