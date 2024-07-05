import React, { Component } from 'react'

export default class TennisPlayer extends Component {
    state = {

        name : "Rafael Nadal",
        bio: "Rafael Nadal Parera, plus simplement appelé Rafael Nadal, né le 3 juin 1986 à Manacor (Espagne), est un joueur de tennis professionnel espagnol.",
        imgUrl: "https://cdn.britannica.com/01/196601-050-F698C5AA/Rafael-Nadal-US-Open-2017.jpg",
        conterT: 0,
        memory : null,
    };
    componentDidMount () {
        this.setState({
            memory: setInterval(()=> this.inc(), 1000)
        });
    }
       componentWillUnmount () {
            clearInterval(this.state.memory);
        }

    inc = () =>{
        this.setState({ conterT: this.state.conterT + 1})
    };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.imgUrl} alt=""  height={"500px"}/>
        <p>{this.state.bio}</p>
        <p>{this.state.conterT}</p>
      </div>
    )
  }
}