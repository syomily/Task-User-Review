import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { data } from '../components/database';


class CardBD extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: data
        }
    }

    // componentDidMount(){
    //     axios.get("https://api.github.com/users/syomily/repos")
    //     .then(res => {
    //         const items = res.data
    //         this.setState({items});
    //     })
    //     .catch(err => console.log('parsing data is failed, err'))
    // }

    render(){
        const{data} = this.state
        console.log(data, 'cards')
        return(
            <CardDeck>
            <React.Fragment>
                {data ? this.state.data.map((Database1, image) => {
                    return (
                        <div className="kotak  mb-4">
                            <Card>
                                <Card.Img width="50" variant="top" src={Database1.image} />
                                <Card.Body>
                                    <Card.Title>{Database1.title}</Card.Title>
                                    <Card.Text>{Database1.genre}</Card.Text>
                                </Card.Body>               
                            </Card>
                        </div>    
                    )
                } ):null}
                
            </React.Fragment>
            </CardDeck>   
        )    
    }
}
export default CardBD;



