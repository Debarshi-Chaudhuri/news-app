import React,{Component} from 'react'
import CountryList from './CountryList.js'
import NewsList from './NewsList.js'
class NewsApp extends Component{
    constructor(props){
        super(props)
        this.state={news:[],s:false}
    }
    countrychange=(country)=>{
     this.setState({
         s:true,news:[]
     });
        console.log(country)
        fetch(`https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`).then((response)=>{
         return response.json();
        }).then((json)=>{
            console.log(json);
            this.setState({news:json.articles,s:false},()=>{
                console.log(this.state.news);
               
            })

        })
    }

    render(){
        return(<div>
            <CountryList change={this.countrychange}/>
            {this.state.s && <img src="https://cdn.dribbble.com/users/807926/screenshots/3629667/loadingtwo.gif" height="250" width="250"/>}
            <NewsList data={this.state.news} loading={this.state.s}/>
            </div>
        );
    }
}
export default NewsApp;