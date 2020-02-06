import React from 'react';


export class Map extends React.Component{

    render(){

        return(
            <div>
                {this.props.filmovi.map((film,i)=>{
                    return(
                    <div>
                    <h2 key={i}>{film.naslov}</h2>
                    <img src={film.image}/>
                    </div>
                    )
                
                })}
            </div>

        )
    }
}