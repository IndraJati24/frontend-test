import React from 'react'
import './App.css';
import Navbar from './components/navbar'
import Tab from './components/tab'
import Content from './pages/content'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      mobile : true
    }
  }
  showButton=() => {
    if(window.innerWidth <= 800){
        this.setState({mobile : false})
    } else {
        this.setState({mobile : true})
    }
}

componentDidMount(){
    this.showButton()
}

render(){
  window.addEventListener('resize', this.showButton)
  return (
    <div className ="container">
      <Navbar/>
      <div className='content'>
        {this.state.mobile === true && (
          <div className='left'>
            <Tab/>
          </div>
        )}
        <div className='right'>
          <Content/>  
        </div>
      </div>
    </div>
  )
}
}

export default App;
