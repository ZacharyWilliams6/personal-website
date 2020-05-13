import React from 'react'
import '../style.css'

export default function SkillSetsButton({title, selected, changePage}) {

    const change = () => {
        return changePage(title)
    }
    
    return (
        <div>
            <button link="/" className='skillSetsButtonStyle' style={selected ? {backgroundColor: '#718de8', color: 'white', fontWeight: 'bold'} : {}} onClick={change}>{title}</button>
        </div>
    )
}
