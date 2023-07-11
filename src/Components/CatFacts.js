import React, { useEffect, useState } from 'react';
import './CatFacts.css';

const CatFacts = () => {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    fetchCatFacts();
  }, []);

  const fetchCatFacts = async () => {
    try {
      const response = await fetch(
        'https://cat-fact.herokuapp.com/facts/random?amount=5'
      );
      const data = await response.json();
      setCatFacts(data);
    } catch (error) {
      console.log('Error fetching cat facts:', error);
    }
  };

  return (
    <div className="cat-facts-container">
      <h1>Cat Facts</h1>
      {catFacts.map((fact, index) => (
        <p className="cat-fact" key={index}>
          {fact.text}
        </p>
      ))}
    </div>
  );  
};

export default CatFacts;
