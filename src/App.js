import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

//Homework 1

class App extends React.Component{

    state ={
      currentPage: 'home',
    }

  handleClick (data){
    this.setState({currentPage: data})
  }
  
  render(){
    const {currentPage} = this.state;
    let page;

    if(currentPage === 'home'){
      page = <Home/>;
    }else if(currentPage === 'news'){
      page = <News/>;
    }else if(currentPage === 'callback'){
      page = <CallBack/>;
    }else if(currentPage === 'contacts'){
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
