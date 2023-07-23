import { createEvent } from "ics"

export const calculateDaysFromNow = (date) => {
    const now = new Date()
    const date2 = new Date(date)
    const daysDiff = (date2.getTime() - now.getTime()) / (1000 * 3600 *24)

    return daysDiff
}

export const getEventDateString = (eventDate) => {
    const daysToEvent = calculateDaysFromNow(eventDate)
    const dt = new Date(eventDate)
    const dateNow = new Date()
    
    const dateDiff = dt - dateNow
    
    if( daysToEvent <= 7 ){
      const formatter = new Intl.RelativeTimeFormat('en', { 
          numeric: 'always',
          style: 'long',
      });

      if(dt.getDate() === dateNow.getDate() ){
          return formatter.format(Math.round(dateDiff / (1000*3600)), 'hours')
      }
      else{
          return formatter.format(Math.round(dateDiff / (1000*3600*24)), 'days')
      }
      
    }
    else{
      return dt.toLocaleDateString("en-GB");
    }
}


export const getFormattedDatetimeStr = (date) => {
    const dt = new Date(date)
    const dateStr = dt.toLocaleDateString("en-GB")
    const timeStr = dt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })

    return `on ${dateStr} at ${timeStr}`
}


export const createIcsFile = async ( eventData ) => {
    const filename = `event_${eventData.Title.replaceAll(" ", "_")}.ics`

    const startDate = new Date(eventData.EventStartDate).toISOString().split("T")[0]
    const startTime = new Date(eventData.EventStartDate).toISOString().split("T")[1].split('.')[0].replaceAll(":", "-")
    const start = (startDate + "-" + startTime).split('-').map(Number)
    
    const endDate = new Date(eventData.EventEndDate).toISOString().split("T")[0]
    const endTime = new Date(eventData.EventEndDate).toISOString().split("T")[1].split('.')[0].replaceAll(":", "-")
    const end = (endDate + "-" + endTime).split('-').map(Number)

    const event = {
        title: eventData.Title,
        start: start,
        end: end,
    }

    const file = await new Promise((resolve, reject) => {
        createEvent(event, (error, value) => {
            if (error) {
            reject(error)
            }
            
            resolve(new File([value], filename, { type: 'text/calendar' }))
        })
    })

    const url = URL.createObjectURL(file);
    
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    
    URL.revokeObjectURL(url);
}