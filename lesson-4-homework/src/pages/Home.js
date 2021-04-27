import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <div className = 'link-box'>
                    <NavLink to="/carousel" activeClassName="selected"> 开始轮播 </NavLink>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
} 