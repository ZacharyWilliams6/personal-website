import React from 'react'
import '../style.css'
import topSectionBar from '../images/topSectionBar.svg'
import bottomSectionBar from '../images/bottomSectionBar.svg'

export default function NewSection({sectionName}) {
    return (
        <div style={{margin: '0 auto'}}>
            <img className='newSectionTopBar' alt="" src={topSectionBar} style={{height: '13px', width: '100%'}}/>
            <h2 className='newSection' style={{textAlign: 'center', color:'#718de8', margin: '5px auto 5px auto'}}>{sectionName}</h2>
            <img className='newSectionBottomBar' alt="" src={bottomSectionBar} style={{height: '13px', width: '100%'}}/>
        </div>
    )
}
