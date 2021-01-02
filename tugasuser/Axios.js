import Axios from "axios";
import React, { Component } from "react";
import './style.css';
 
class AxiosGithub extends Component {
   constructor(props){
       super(props)
       this.state = {
        items: []
       }
   }

   componentDidMount(){
       Axios.get("https://api.github.com/users/syomily/repos")
        .then(res => {
            const items = res.data
            this.setState({items});
        })
        .catch(error => console.log('parsing data is failed', error))
   }

   render(){
       const{items} = this.state
       return(
           <div className="boxWhite">
               <h2>Random User</h2>
               {
                   items.length > 0 ? items.map(item => {
                       return(
                           <div key={item.owner.id} className="square">
                               <center><h1>{item.owner.html_url}</h1></center>
                               <ul>
                               <li><h1>{item.name}</h1></li>
                               </ul>
                           </div>
                       )
                   }) 
                :null}
           </div>
       )
   }
}

export default AxiosGithub;