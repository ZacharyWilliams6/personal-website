import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SkillSetsButton from './SkillSetsButton'

export default class SkillSetsTable extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            leftContent: "• Worked on web development projects during my previous internship (Flexagon).\n\n• Experienced working with WordPress and various WordPress plugins.\n\n• Proficient with implementing projects using the MERN stack",
            rightContent: "I have loved working on websites since a young age, learning HTML and CSS as a hobby to create websites in 6th grade.\n\nAs the web is so accessible and the browsers are running such powerful engines, many of my ideas that I look to implement will be developed for the web.",
            items: [
                 {
                     uuid: uuidv4(),
                     title: "Web Development",
                     leftContent: "• Worked on web development projects during my previous internship (Flexagon).\n\n• Experienced working with WordPress and various WordPress plugins.\n\n• Proficient with implementing projects using the MERN stack",
                     rightContent: "I have loved working on websites since a young age, learning HTML and CSS as a hobby to create websites in 6th grade.\n\nAs the web is so accessible and the browsers are running such powerful engines, many of my ideas that I look to implement will be developed for the web.",
                     selected: true,
                 },
                 {
                     uuid: uuidv4(),
                     title: "Other Development",
                     leftContent: "other dev",
                     rightContent: "some test content",
                     selected: false,
                 },
                 {
                     uuid: uuidv4(),
                     title: "Video Editing",
                     leftContent: "my video editing skills",
                     rightContent: "yupyup",
                     selected: false,
                 },
                 {
                     uuid: uuidv4(),
                     title: "Design",
                     leftContent: "wow im so good at design guys look",
                     rightContent: "is my functionality really working? :O",
                     selected: false,
                 }
             ]
        }
    }

    switchSelected(title){
        
        this.setState((prevState) => ({
            items: prevState.items.map((buttonItem) => (title === buttonItem.title ? Object.assign(buttonItem, {selected: true}) : Object.assign(buttonItem, {selected: false})))
        }), () => {
            const selectedObject = this.state.items.filter((obj) => obj.selected);
        
            this.setState((prevState) => ({
                leftContent: selectedObject[0].leftContent,
                rightContent: selectedObject[0].rightContent
            }));
        });


    }

    render() {
        return (
            <div className = "container">
                <div className = "table">
                    {this.state.items.map( item => 
                        <SkillSetsButton key={item.uuid} title={item.title} selected={item.selected} changePage={this.switchSelected.bind(this)} />
                            )}
                    <div className = "leftSection"><h3 style={{color: '#a671e8'}}>Previous Experience: </h3>{this.state.leftContent.split('\n').map(newLine => (<p key={uuidv4()} style={{color: '#a671e8'}}>{newLine}</p>))}</div>
                    <div className = "rightSection">{this.state.rightContent.split('\n').map(newLine => (<p key={uuidv4()} style={{color: '#718de8'}}>{newLine}</p>))}</div>
                </div>
            </div>
        )
    }
}
