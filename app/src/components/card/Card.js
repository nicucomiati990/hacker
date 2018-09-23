import React, { Component } from 'react';
import "./Card.scss";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.number},{this.props.symbol}</h1>
            </div>
        )
    };
}

export default Card;