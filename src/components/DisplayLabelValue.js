import React from 'react'

export const DisplayLabelValue = ({ label, value, inline = false }) => {
    return <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:5, flexDirection: inline ? 'row' : 'column' }}>
        <span><b>{label}: </b></span>
        <span>{value}</span>
    </div>
}
