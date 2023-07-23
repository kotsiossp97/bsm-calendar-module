import React from 'react'
import UpcomingEventLinks from './UpcomingEventLinks'
import { FontIcon } from '@fluentui/react/lib/Icon'
import "./UpcomingEvents.css"


const UpcomingEvents = ({eventsData}) => {

    // Get events that are upcoming only
    const upcomingEventsData = eventsData.filter(event => new Date(event.EventStartDate) > new Date() )

    // Sort Events by start Date
    upcomingEventsData.sort((a,b)=> (
        new Date(a.EventStartDate) - new Date(b.EventStartDate)
    ))

    return (
        <div className='upcoming'>
            <div className='header'>
                <FontIcon iconName="Event" />
                <h2>Upcoming Events</h2>
            </div>
            <UpcomingEventLinks eventsData={upcomingEventsData} />
        </div>
  )
}

export default UpcomingEvents