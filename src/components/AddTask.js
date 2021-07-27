import React, { Component } from 'react';
import "./AddTask.css";

class AddTask extends Component {
    state = { 
        text:"",
        checked:false,
        date: new Date().toISOString().slice(0, 10),
        
     }

     handleText=(e)=>{
         this.setState({
             text:e.target.value
         })
     }

     handleCheckbox=(e)=>{
        this.setState({
            checked:e.target.checked
        })
     }

     handleDate=(e)=>{
         this.setState({
         date: e.target.value
        })
     }

     handleClick=()=>{
         const { text, checked, date}= this.state
         if(text.length > 2){
        const add = this.props.add(text, date, checked)
        if(add){
            this.setState({
                text:"",
                checked:false,
                date:this.minDate
            })
        }else{
            console.log("za krótka nazwa")
        }
    }
     }

    render() { 

        const minDate = new Date().toISOString().slice(0,10)
        let maxDate = minDate.slice(0,4) *1 + 1;
        maxDate= maxDate + "-12-31"

        return ( 
            <div className="form">
                   <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
                   <input type="checkbox" checked={this.state.checked}  id="important" onClick={this.handleCheckbox}/>
                   <label htmlFor="important" >Priorytet</label>
                   <br />
                   <label htmlFor="date">Do kiedy zrobić </label>
                   <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate}/>
                   <button onClick={this.handleClick}>Dodaj</button>
                <hr />
            </div>
         );
    }
}
 
export default AddTask;