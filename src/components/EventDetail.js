import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export const EventDetail = ({ open = false, closeModal = () => { },title, data, eventContentComponent }) => {
    const EventContentComponent = eventContentComponent;
    const onCloseModal = () => closeModal(false);
    if (!!!data.patient)
        return null
    return (
        <div>
            <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} styles={{ modal: { width: '100%' } }}>
                <div className="event-container">
                    <div className="event-header">
                        {title && <h2 className="event-title">{title}</h2>}
                        <button onClick={onCloseModal} className="btn-round">X</button>
                    </div>
                    <div className="event-content">
                        <EventContentComponent data={data} />
                    </div>

                </div>
            </Modal>
        </div>
    )
}
