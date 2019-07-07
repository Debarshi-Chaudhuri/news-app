import React,{Component} from 'react'
import NewsHead from './NewsHead.js'
class NewsList extends Component{
    render(){
        return(<div style={{textAlign:"justify"}}>
            {
            this.props.data.map(
                (item)=><NewsHead  description={item.description} image={item.urlToImage}/>
            )
            }
            
        </div>

        );
    }
}
export default NewsList