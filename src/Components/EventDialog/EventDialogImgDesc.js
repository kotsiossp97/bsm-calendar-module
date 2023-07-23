import React from 'react'

const EventDialogImgDesc = ({ eventData }) => {
    return (
        <div className='imageDescContainer'>
            <img src={eventData.BannerUrl} alt="" loading='lazy'/>

            <div className='m-10 flexGrow'>
                <div style={{ overflowY: "auto"}} dangerouslySetInnerHTML={{ __html: eventData.Description}}>
                </div>
            </div>
        </div>
    )
}

export default EventDialogImgDesc