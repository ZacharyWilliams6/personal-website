import React from 'react'
import MenuItem from './MenuItem'
import { v4 as uuidv4 } from 'uuid';
import '../style.css'
import cornerObject from '../images/cornerThing.svg'

let h1StyleZachary = {
    paddingLeft: '30px',
    color: '#718de8',
    display: 'table-cell',
    fontWeight: 'bold'
};

let h1StyleWilliams = {
    color: '#a671e8',
    display: 'table-cell',
    fontWeight: 'bold'
};

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {MenuItems: [
            {
                uuid: uuidv4(),
                title: "home",
                selected: false,
                link: "/"
        },
            {
                uuid: uuidv4(),
                title: "blog",
                selected: false,
                link: "/blog"
        },
            {
                uuid: uuidv4(),
                title: "projects",
                selected: false,
                link: "/projects"
        }, 
            {
                uuid: uuidv4(),
                title: "github",
                selected: false,
                link: "http://www.github.com"
            }
        ]}
    }

    componentDidMount() {
        this.setState((prevState) => ({
            MenuItems: prevState.MenuItems.map((menuItem) => (window.location.pathname === menuItem.link ? Object.assign(menuItem, {selected: true}) : Object.assign(menuItem, {selected: false})))
        }));
    }

    onSelectPage(newPage){
        this.setState((prevState) => ({
            MenuItems: prevState.MenuItems.map((menuItem) => (newPage === menuItem.title ? Object.assign(menuItem, {selected: true}) : Object.assign(menuItem, {selected: false})))
        }));
    }
    

    render(){
        return (
            <div className ="headerContainer">
                <div className='nameContainer'>
                    <h1 className='zachary' style={h1StyleZachary}>zachary</h1>
                    <h1 className='williams' style={h1StyleWilliams}>williams</h1>
                </div>
                <div className="menuItemsContainer">
                    {this.state.MenuItems.map( menuItem => 
                        <MenuItem key = {menuItem.uuid} title={menuItem.title} selected={menuItem.selected} link={menuItem.link ? menuItem.link : ""} selectPage={this.onSelectPage.bind(this)} />
                    )}
                </div>
                <img className='cornerImage' alt="" src={cornerObject} style={{position: 'absolute', top: '70px', left: '0', zIndex: '-1'}}/>
            </div>
            
        );
    }
}
