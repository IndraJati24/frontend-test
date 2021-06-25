import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Axios from 'axios'


class Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            post : [],
            currentPage : 1,
            itemPerPage : 4,
        }
    }
    

    componentDidMount() {
        Axios.get('https://randomuser.me/api/?results=28')
        .then((res)=>{
            this.setState({data : res.data.results})
        })
        .catch((err)=>{ console.log(err)})
    }
    render(){
        const{currentPage, itemPerPage, data} = this.state

        const indexLast = currentPage * itemPerPage
        const indexFirst = indexLast - itemPerPage
        const currentPost = data.slice(indexFirst,indexLast)
        return(
            <div>
                <div style={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'center'}}>
                    {currentPost.map((item, index)=> {
                            return(
                                <Card style={{ width: 200, margin: 5 }} key={index}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        Personal ID : 123456
                                        <i className="fas fa-ellipsis-h fa-lg" ></i>
                                    </div>
                                        <Card.Img variant="top" style={{height: 175}}src={item.picture.large} />
                                        <div style={{marginTop: 5}}>
                                            <ul style={{listStyleType: 'none'}}>
                                                <li style={{fontWeight: 'bold'}}>Name</li>
                                                <li>{item.name.first} {item.name.last}</li>
                                                <li style={{fontWeight: 'bold' }}>Telephone</li>
                                                <li>{item.phone}</li>
                                                <li style={{fontWeight: 'bold' }}>Birthday</li>
                                                <li>{item.registered.date}</li>
                                                <li style={{fontWeight: 'bold' }}>Email</li>
                                                <li>{item.email}</li>
                                            </ul>
                                        </div>
                                </Card>
                            )
                        })}
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button 
                    style={{backgroundColor: 'transparent', border: 'none', color: 'black'}}
                    onClick={()=> this.setState({currentPage : currentPage - 1})}
                    disabled={currentPage === 1 ? true : false}
                    > 
                        <i className="fas fa-chevron-left" ></i> Previous Page
                    </Button>

                    <Button 
                    style={{backgroundColor: 'transparent', border: 'none', color: 'black'}}
                    onClick={()=> this.setState({currentPage : currentPage + 1})}
                    disabled={currentPage === data.length / itemPerPage ? true : false}
                    >
                        Next Page <i className="fas fa-chevron-right" ></i>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Data