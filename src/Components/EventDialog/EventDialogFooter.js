import React from 'react'
import { getFormattedDatetimeStr } from '../../Utils/Functions'

const EventDialogFooter = ({eventData}) => {
    return (
        <div className='dialogFooter'>
            <span>Created by {eventData.Author} {getFormattedDatetimeStr(eventData.Created)}</span>
            <span>Modified by {eventData.Editor} {getFormattedDatetimeStr(eventData.Modified)}</span>
        </div>
    )
}

export default EventDialogFooter