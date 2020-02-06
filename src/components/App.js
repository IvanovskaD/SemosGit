import React from 'react';
import {Map} from './Map';


export class App extends React.Component{

  constructor(props){
    super(props);
    this.state={

      username:"",
      password:""

    }
  }

 
  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  
  render(){

    var niza = [
      {naslov:"Pulp Fiction", image:"https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"},
      {naslov:"Back To the Future", image:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/220px-Back_to_the_Future.jpg"},
      {naslov:"The Godfather", image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"}
    ]

    return(
      <div>
        {/* <Map filmovi={niza}/> */}
        <input 
        value={this.state.username}
        name="username"
        type="text" 
        onChange={this.usernameChangeHandler}
        placeholder="Username"
        />
       <h2>{this.state.username}</h2>

        <br/>
        <input
        value={this.state.password}
        name="password"
        type="text"
        placeholder="Password"
        onChange={this.passwordChangeHandler}
        />
        <h2>{this.state.password}</h2>
      </div>

    )

  }
}
