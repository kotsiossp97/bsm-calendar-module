import React from 'react'

const EventDialogLocation = ({eventData}) => {

    const handleViewMapClick = () => {
        const address = eventData.AddressLine1 + " " 
                        + eventData.AddressLine2 + " "
                        + eventData.City + ", "
                        + eventData.PostCode + ", "
                        + eventData.Country
        const mapsUrl = `https://www.google.com/maps/search/${address.replaceAll(" ", "+")}/`
        window.open(mapsUrl, "_blank")
    }

    return (
        <div className='locationContainer' >
            <h3>LOCATION</h3>
            <div>
                <span>{eventData.AddressLine1}</span>
                <span>{eventData.AddressLine2}</span>
                <span>{eventData.City}</span>
                <span>{eventData.PostCode}</span>
                <span>{eventData.Country}</span>
                <span className='eventLink' onClick={handleViewMapClick}>View Map</span>
            </div>
        </div>
    )
}

export default EventDialogLocation