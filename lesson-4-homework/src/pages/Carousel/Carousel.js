import React from 'react';
import style from './style.use.less'
import Carouse from '../../components/Carousel/Carousel'

export default class Test extends React.Component {
    componentWillMount() {
        style.use()
    }

    componentWillUnmount() {
        style.unuse()
    }

    render() {
        return ( 
            <div className = 'carouse'>   
                <Carouse>
                    <div className = 'box'><img src="/imgs/1.jpg" style={{width:"300px", height:"200px"}}></img></div>
                    <div className = 'box'><img src="/imgs/2.jpg" style={{width:"300px", height:"200px"}}></img></div>
                    <div className = 'box'><img src="/imgs/3.jpg" style={{width:"300px", height:"200px"}}></img></div>
                    <div className = 'box'><img src="/imgs/4.jpg" style={{width:"300px", height:"200px"}}></img></div>
                </Carouse>
            </div>
            
        )
    }
}