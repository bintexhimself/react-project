import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component{
    constructor(){
        super()
          this.state = {
             firstName: '',
             lastName: '',
             age: '',
             location: '',
             bodyText: '' ,        
             cards: []
          }
          this.handleChange=this.handleChange.bind(this)
          this.submit=this.submit.bind(this)
      }

     handleChange(event){
       const {name, value} = event.target
       this.setState({
         [name]: value
       })
     }
     
      submit(){
      const card = this.state.cards;
      let newCard = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        bodyText: this.state.bodyText,
        location: this.state.location,
        
        
      }
      card.push(newCard);
      this.setState({cards: card});
      
 
    }


    render(){

      const cardItem = this.state.cards.map((card, index) => {
        return(
           <div className = 'card-item' key = {index}>
              <h1>{card.firstName} {card.lastName}</h1>  
              <p>Age: {card.age}</p>
              <p>Location: {card.location}</p>
              <p>Bio: {card.bodyText}</p>
           </div>
         )
      })
              
        return(
          <div className='container'>
          <Header />
          <Main handleChange={this.handleChange} submit={this.submit} data={this.state}/>
          <div className = 'card-container'>
                {cardItem }
           </div>    
          <Footer />
          </div>
        )
      }
}

export default App;
