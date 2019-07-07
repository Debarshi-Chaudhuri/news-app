import React,{Component}from 'react'
class CountryList extends Component{
    render(){
        return(<div>
            <button onClick={()=>{ this.props.change('in')}}>INDIA</button>
            <button onClick={()=>{ this.props.change('ru')}}>RUSSIA</button>
            <button onClick={()=>{ this.props.change('fr')}}>FRANCE</button>
            <button onClick={()=>{ this.props.change('us')}}>AMERICA</button>
            </div>

        );
    }
}
export default CountryList;