import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css'
import Modal from './Modal';

const Card = ({ title, description}) => {
    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <hr />
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Modal/>
              <p className="card-text">{description}</p>
              <a href="#" className="card-link">Read more</a>
            </div>
        </div>
    )
}

export default Card;

