import { IconButton } from '@fluentui/react'
import React from 'react'

const EventDialogTitle = ({eventData, onDismiss}) => {
    const eventMonth = new Date(eventData.EventStartDate).toLocaleString('default', { month: 'short' })
    const eventDay = new Date(eventData.EventStartDate).toLocaleString('default', { day: '2-digit' })

    return (
        <div className='flexCol titleRootContainer'>
            <div className='titleContainer'>
                <div className='titleTopBar'>
                    <div className='flexCol topBar'>
                        <span className='month' >{eventMonth}</span>
                        <span className='day'>{eventDay}</span>
                    </div>
                    <IconButton iconProps={{iconName: "cancel"}} onClick={onDismiss} />
                </div>
                <div>
                    <h2>{eventData.Title}</h2>
                </div>
                <div>
                    <p>{eventData.Category}</p>
                </div>
            </div>
        </div>
    )
}

export default EventDialogTitle