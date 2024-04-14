import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css'

const Card = () => {
    return (    
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <hr />
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="card-link">Read more</a>
            </div>
        </div>
    )
}

export default Card;

