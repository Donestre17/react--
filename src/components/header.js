import React,{ Component } from 'react';
import { render } from 'react-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg:'this is header !'
        }
    }
    render(){
        return (
            <header>{this.state.msg + this.props.info}</header>
        )
    }
}

export default Header;