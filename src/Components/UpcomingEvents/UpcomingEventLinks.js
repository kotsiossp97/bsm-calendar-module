import EventLinkButton from './EventLinkButton'

const UpcomingEventLinks = ({eventsData}) => {
  
  return (
    <div className='eventLinks'>
        {eventsData.map( event => (
          <EventLinkButton key={event.ID} eventData={event} />
        ))}
    </div>
  )
}

export default UpcomingEventLinks