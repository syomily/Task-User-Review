import React, { Component } from "react";
import './style.css';
 
class FetchGithub extends Component {
   constructor(props){
       super(props)
       this.state = {
        items: []
       }
   }

   componentDidMount(){
       fetch("https://api.github.com/users/syomily/repos")
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(parsedJSON => parsedJSON.map(data => (
            {
                id: `${data.owner.id}`,    
                html_url: `${data.owner.html_url}`,
                Name: `${data.name}`,
                repos : `${data.owner.repos_url}`,
            }
        )))
        .then(items => this.setState({
            items
        }))
        .catch(error => console.log('parsing data is failed', error))
   }

   render(){
       const{items} = this.state
       return(
           <div className="boxWhite">
               <h2>Random User</h2>
               {
                   items.length > 0 ? items.map(item => {
                       const {id, html_url, Name, repos } = item
                       return(
                           <div key={id} className="square">
                               <center>
                                   <h1>{html_url}</h1>
                                </center>
                               <ul>
                                <left>   
                               <li><h1>{Name}</h1></li>
                               <li><h1>{repos}</h1></li>
                               </left>
                               </ul>
                           </div>
                       )
                   }) 
                :null}
           </div>
       )
   }
}

export default FetchGithub;