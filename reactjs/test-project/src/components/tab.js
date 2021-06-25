import React from 'react';


const Side = [
    {
        icon : <i className="fas fa-home fa-sm" ></i>,
        title : 'Beranda'
    },
    {
        icon : <i className="fas fa-users fa-sm"></i>,
        title : 'Personal List'
    },
    {
        icon : <i className="far fa-calendar-alt fa-sm"></i>,
        title : 'Daily-Atendance'
    },
]
class TabSide extends React.Component {
    
    render(){
        return(
            <div>
                {Side.map((item, index) => {
                    return(
                        <div style={{display : 'flex',alignItems: 'center', width: 250, marginBottom: 5}}key={index}>
                            <div style={{width: 30}}>{item.icon}</div>
                            <a style={{textDecoration : 'none', color: 'black'}} href="#">{item.title}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TabSide