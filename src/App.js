import React from 'react';
import { HashRouter as Router, Route, HashRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './style.css'
import zachTop from './images/za_portrait_1.svg'
import thinkingImage from './images/za_portrait_2.svg'
import Header from './components/Header'
import SkillSetsTable from './components/SkillSetsTable'
import NewSection from './components/NewSection'

function App() {
  return (
    <HashRouter>
    <Header />
      <Route exact={true} path="/" >
        <div className="container" style={{marginTop: '150px', display:'block', position: 'relative'}}>
          <div style={{display: 'table', width: '100%'}}>
            <div className='leftIntroTableCell' style={{display: 'table-cell', width: '25%', textAlign: 'center', zIndex: '0', position: 'relative'}}><img className='sideImage' alt ="Cartoon Zachary Williams" src={zachTop}/></div>
            <div className='rightIntroTableCell' style={{display: 'table-cell', width: '75%', verticalAlign: 'top', marginLeft:'20px'}}>
              <h3 className='heyImZach' style={{color: '#a671e8'}}>Hey, I'm Zach!</h3>
              <h4 className='thankYou' style={{color: '#718de8', marginTop: '10px !important'}}>Thank you for taking the time to navigate to my website!</h4>  
              <h4 className='moreInformation' style={{fontSize: '23pt', color: '#718de8', marginTop: '30px !important'}}>Below you can find a little more information about me.</h4>
              <div className='buttonContainer'>
                <button className='btn_myResume' style={{marginTop: '30px', marginRight: '30px'}}>My Resume</button>
                <button className='btn_contactMe'>Contact Me</button>
              </div>
            </div>
            </div>
        <NewSection key={uuidv4()} sectionName="WHO AM I?"/>
          <div style={{display: 'table', width: '100%'}}>
            <div className='rightIntroTableCell' style={{display: 'table-cell', width: '25%', textAlign: 'center', float: 'right'}}><img className='sideImage' alt ="Cartoon of Zachary Williams" src={thinkingImage}/></div>
            <div className='leftIntroTableCell' style={{display: 'table-cell', width: '75%', verticalAlign: 'middle', float: 'left'}}>
              <h4 className='scalingFontSize' style={{color: '#2879ff', marginTop: '10px', marginRight: '10px'}}>
              First and foremost, I am a geek. I love to invest my time into learning new things and creating new things.
              </h4>
              <h4 className='scalingFontSize' style={{color: '#718de8', marginTop: '30px', marginRight: '10px'}}>
              I am currently 20 years old and am attending the University of Wisconsin - Madison pursuing a computer science degree.
              </h4>
            </div>
          </div>
        <NewSection key={uuidv4()} sectionName="MY SKILLSETS"/>
        <SkillSetsTable />
        <NewSection key={uuidv4()} sectionName="YOU HIRING?"/>
        <div style={{paddingBottom: '150px'}}>
          <h4 className='scalingFontSize' style={{color: '#2879ff', textAlign: 'center'}}>
            If you think you might be interested in my services whether you are a 
            company or working on a project, let me know! For the fastest response, you can email me at
          </h4>
          <h4 className='scalingFontSize' style={{color: 'white', marginTop: '30px', textAlign: 'center', backgroundColor: '#a671e8', padding: '20px 0'}}>
            Zachary.Williams6@outlook.com
          </h4>
          </div>
        </div>
      </Route>
      <Route path="/blog"></Route>
      <Route path="/projects">Projects Content</Route>
    </HashRouter>
  );
}

export default App;
