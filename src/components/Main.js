import React from 'react';
import logo from './images/bintech logo.png';

const Main = (props) =>{
    return(
        <div className='main'>
            <div className='left-panel'>
                <img src={logo} alt='logo'/>
                <div className='inner-text'>
                    <h2>React App</h2>
                    <p>A single page React App for creating post card developed by Bintex Technologies</p>
                </div>
            </div>
            <div className='right-panel'>
                
                        <h3><strong>Create a New Post Card</strong></h3>
                        <input type='text' placeholder='First Name' name='firstName' value = {props.data.firstName} onChange = {props.handleChange}/><br />
                        <input type='text' placeholder='Last Name' name='lastName' value ={props.data.lastName} onChange = {props.handleChange}/><br />
                        <input type='text' placeholder='Age' name='age' value = {props.data.age} onChange = {props.handleChange}/><br />
                        <select name='location' className='location' value ={props.data.location} onChange = {props.handleChange} >
                            <option  disabled  >--Choose a Location--</option>
                            <option value = 'England'>England</option>
                            <option value = 'Norway'>Norway</option>
                            <option value = 'Spain'>Spain</option>
                            <option value = 'United state of america'>United State of America</option>
                        </select><br />
                        <textarea className='text-area' name='bodyText' value ={props.data.bodyText} onChange = {props.handleChange}
                        placeholder ='About Yourself' >
                            </textarea><br />
                        <button className='button' onClick={props.submit}>Add New Post</button>
                
            </div>            
            
        </div>       
            
    
    )
}

export default Main;