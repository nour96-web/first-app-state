import React, { Component } from 'react'

export default class FootPlayer extends Component {
    state = {

        name : "Kylian Mbappé",
        bio: "Kylian Mbappé, né le 20 décembre 1998 à Paris, est un footballeur international français évoluant au poste d'attaquant au Real Madrid. Considéré comme l’un des meilleurs joueurs du monde2,3, il est reconnu pour la qualité de ses dribbles, son efficacité, sa percussion et sa très grande vitesse.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2022_FIFA_World_Cup_France_4%E2%80%931_Australia_-_%287%29_%28cropped%29.jpg/250px-2022_FIFA_World_Cup_France_4%E2%80%931_Australia_-_%287%29_%28cropped%29.jpg",
        conterF: 0,
        memory : null,
    }
    componentDidMount () {
        this.setState({
            memory: setInterval(()=> this.inc(), 1000)
        });
    }
       componentWillUnmount () {
            clearInterval(this.state.memory);
        }

    inc = () =>{
        this.setState({ conterF: this.state.conterF + 1})
    };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.imgUrl} alt="" height={"500px"} />
        <p>{this.state.bio}</p>
        <p>{this.state.conterF}</p>
      </div>
    )
  }
}
