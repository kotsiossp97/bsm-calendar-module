import React, { useState } from 'react'
import { getEventDateString } from '../../Utils/Functions'
import EventDialog from '../EventDialog/EventDialog'

const EventLinkButton = ({eventData}) => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleLinkClick = () => {
        setModalOpen(true)
    }

    const handleOnDismiss = () => {
        setModalOpen(false)
    }

    return (
        <div className='eventLink' onClick={handleLinkClick}>
            {eventData.Title} - {getEventDateString(eventData.EventStartDate)}
            <EventDialog eventData={eventData} modalOpen={modalOpen} onDismiss={handleOnDismiss} />
        </div>
    )
}

export default EventLinkButton