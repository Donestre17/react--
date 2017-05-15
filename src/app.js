import React,{ Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header'

require('./style/style.css')

class MyApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            info:'',
            items:[
                'no1',
                'no2',
                'no3'
            ]
        }
        this.clickhandle = this.clickhandle.bind(this);
        this.inputHandle = this.inputHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this)
    }
    clickhandle(ev){
        let num = this.state.count;
        let newArr = [...this.state.items,'no'+((++num)+3)]
        this.setState({
            count:num,
            items:newArr
        })
    }
    inputHandle(ev){
        var txt = ev.target.value;
        this.setState({
            info:txt
        })
    }
    submitHandle(ev){
        if(ev.keyCode!=13) return;
        let info = this.state.info
        let newArr = [...this.state.items,info];
        this.setState({
            items:newArr
        })
    }
    render(){
        let data = this.state
        return (
            <div className="wrap" onKeyDown={this.submitHandle}>
                <Header info={this.state.info}></Header>
                <input type="text" defaultValue="请输入内容" onChange={this.inputHandle}/>
                <h1 onClick={this.clickhandle}>
                    {
                        data.items.map((e,i)=>{
                            return (<p key={i}>{e}</p>)
                        })
                    }
                </h1>
            </div>
            
            )
    }
}

render(
    <MyApp mes="test"/>,
    document.getElementById('root')
)