import React, { Component } from "react";
 
class Home extends Component {
   constructor(props){
       super(props)
       this.state = {
        items: []
       }
   }

   componentDidMount(){
       fetch("https://avatars3.githubusercontent.com/u/74134663?v=4")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
            {
                id: `${data.id}`,
                name: `${data.name}`,
                fullName: `${data.name.full}`,
                login: `${data.login}`,
                thumbnail: `${data.picture.large}`
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
                    const {id, name, fullName, login, thumbnail} = item
                    return(
                        <div key={id} className='bgCircle'>
                            <center>
                                <img src={thumbnail} alt={fullName} className='circle' />
                             </center> <br></br>
                            <div className='info'>
                                 {id} {fullName} <br></br>
                                 {login}
                            </div>  
                         </div>  
                     
                    )
                 }) 
                :null} 
                   
                
           </div>
       )
   }
}

export default Home;