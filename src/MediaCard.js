import React, { Component } from "react";
import "./MediaCard.scss";

class MediaCard extends Component {
  
  render() {
    let iconClass = 'fas fa-heart ';
    if (!this.props.heart) {
      iconClass += 'card__footer--icon-disabled';
    } else {
      iconClass += 'card__footer--icon';
    }
    const card__header = (
      <div className="card__header">
        <img src={this.props.image} alt={`${this.props.name} profile`} className="image"/>
        <h1 className="user">{this.props.username}</h1>
        <h2 className="date">{this.props.date}</h2>
      </div>
    );
    const card__body = (
      <p className="post">{this.props.content}</p>
    );
    const card__footer = (
      <div className="card__footer">
        <p className="card__footer--text">Leer más</p>
        <p className="card__footer--number">{this.props.likes}</p>
        <i className={iconClass}></i> 
      </div> 
    );
    const card = (
      <div className="MediaCard">
          <div className="card_container">
            { card__header }
            { card__body }
            { card__footer }             
          </div>
      </div>
    );
    return card;
  } 
}
export default MediaCard;