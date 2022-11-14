import { render } from '@testing-library/react';
import React from 'react';
import './App.css';


//Props
// const UserData = (props) =>{
//   return(
//     <div>
//       <div>{props.name}</div>
//       <div>{props.surname}</div>
//     </div>
//   )
// }

// const PropChildren = (props) => {
//   return <div className='props-children' >{props.children}</div>;
// };

// class App extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {};
//   }

//   render(){
//     return(
//     <div>
//       <UserData name='Mari' surname='Serotyuk' />
//       <UserData name='Mari' surname='Serotyuk' />
//       <UserData name='Mari' surname='Serotyuk' />
//       <UserData name='Mari' surname='Serotyuk' />

//       <PropChildren>
//       <UserData name='Mari' surname='Serotyuk' />
//       <UserData name='Mari' surname='Serotyuk' />
//       </PropChildren>
//     </div>
//     )
    
//   }
// }


//State



// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       counter: 0,
//     }
//   }
  
  // state = {counter: 0};

//   increment = () => {
//     this.setState({ counter : this.state.counter + 1})
//   }

//   decrement = () =>{
//     this.setState({ counter : this.state.counter - 1})
//   }

//   render() {
//     return(
//       <div>
//        <div>{this.state.counter}</div>

//        <button onClick={this.increment}>Increment</button>

//        <button onClick={this.decrement}>Decrement</button>
//       </div>
//     )
//   }
// }

//События

// const PropChildren = (props) => {
//   return <div className='props-children'>{props.children}</div>;
// }

// class App extends React.Component{
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };

//   }

//   increment(){
//     this.setState({counter: this.state.counter + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.counter}</div>
//         {/* <button onClick={this.increment.bind(this)}>Increment</button> */}
//         <button onClick={(e) => this.increment(e)}>Increment</button>
//       </div>
//     )
//   }
// }

//Homework 1

class App extends React.Component{

    state ={
      currentPage: 'home',
    }
 

  handleClick (data){
    this.setState({currentPage: data})
  }
  
  render(){
    const pageIdent = this.state.currentPage;
    let page;

    if(pageIdent === 'home'){
      page = <Home/>;
    }else if(pageIdent === 'news'){
      page = <News/>;
    }else if(pageIdent === 'callback'){
      page = <CallBack/>;
    }else if(pageIdent === 'contacts'){
      page = <Contacts/>;
    }



    return (
      <div>
        <header>
        <nav>
          <ul className='headerUl'>
            <li>
              <a href={'#'} onClick={(e) => {
                e.preventDefault()
                this.handleClick('home')
              }}>Home</a> 
            </li>
            <li>
              <a href={'#'} onClick={(e) => {
                e.preventDefault()
                this.handleClick('news')
              }}>News</a> 
            </li>
            <li>
              <a href={'#'} onClick={(e) => {
                e.preventDefault()
                this.handleClick('callback')
              }}>CallBack</a> 
            </li>
            <li>
              <a href={'#'} onClick={(e) => {
                e.preventDefault()
                this.handleClick('contacts')
              }}>Contacts</a> 
            </li>
            
          </ul>
        </nav>
      </header>
      {page}
      </div>
      

    )
  }
  
}

class Home extends React.Component{

  render(){

    return <div>Home page</div>;
  }
}
 
class News extends React.Component{

  render(){

    return <div>News page</div>;
  }
}

class CallBack extends React.Component{

  render(){

    return <div>CallBack page</div>;
  }
}

class Contacts extends React.Component{

  render(){

    return <div>Contacts page</div>;
  }
}

export default App;
