import React,{Component} from 'react'
import giphy from './giphy.gif';
import './App.css';
class NewsHead extends Component{
    constructor(props){
        super(props);
        this.state={a:giphy}
    }
    loading=()=>{
        
        this.setState({a:this.props.image})

    }

   
    render(){
        
        return(
            <div style={{display:"flex",flexDirection:"row"}}>
            <img src={this.state.a} onLoad={this.loading} className="container" />
            <p style={{padding:"20px"}}>{this.props.description}</p>
            </div>
        );
        
    }
}
export default NewsHead;