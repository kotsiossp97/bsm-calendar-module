import { Modal  } from '@fluentui/react';
import EventDialogLocation from './EventDialogLocation';
import EventDialogDateTime from './EventDialogDateTime';
import EventDialogFooter from './EventDialogFooter';
import EventDialogTitle from './EventDialogTitle';

import "./EventDialog.css"
import EventDialogImgDesc from './EventDialogImgDesc';


const EventDialog = ({ eventData, modalOpen, onDismiss }) => { 
    return (
        <Modal
            isOpen={modalOpen}
            onDismiss={onDismiss}
        >
            <div className='flexCol modalContainer'>
                <div className='d-flex flexGrow'>
                    <EventDialogImgDesc eventData={eventData} />

                    <div className='flexGrow'>
                        <EventDialogTitle eventData={eventData} onDismiss={onDismiss} />

                        <div className='m-10 flexGrow'>
                            <EventDialogDateTime eventData={eventData} />
                            <EventDialogLocation eventData={eventData} />
                        </div>
                    </div>
                </div>

                <EventDialogFooter eventData={eventData} />
            </div>
        </Modal>
    )
}

export default EventDialog