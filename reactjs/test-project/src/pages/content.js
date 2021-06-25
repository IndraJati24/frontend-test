import React from 'react';
import './content.css'
import Data from '../components/data'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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
        if(this.state.mobile === !this.state.mobile){
            this.showButton()
        }
    }
   
    render(){
        window.addEventListener('resize', this.showButton)
        return(
            <div className="personal">
                <div className="top" style={{flexDirection: this.state.mobile === false ? 'column' : 'row'}}>
                    <div className="top-left" style={{textAlign: this.state.mobile === false ? 'center' : 'left'}}>
                        <h2 className="head">PERSONNEL LIST</h2>
                        <h4 className="subHead">List of all personnels</h4>
                    </div>
                    <div className="top-right" style={{flexDirection: this.state.mobile === false ? 'column' : 'row'}}>
                            <InputGroup style={{width : 200}}>
                                    <InputGroup.Text style={{height:45, backgroundColor: 'white', borderRight: 'none'}}><i className="fas fa-search"></i></InputGroup.Text>
                                <FormControl
                                style={{height: 45, borderLeft: 'none'}}
                                placeholder="Find Personnels"
                                />
                            </InputGroup>
                    <Button style={{height : 43, margin: 2, fontSize: 12, color: 'white', width: 200}}variant="info">ADD PERSONNEL <i className="fas fa-plus fa-lg"></i> </Button>
                    </div>
                </div>
                <div className="bottom">
                <Data/>
                </div>
            </div>
        )
    }
}

export default Content;