import React  from 'react';


const Card = ({index, img, title}) => {
    
    return (
        <div key={index} className="first">
                <h3 className="deep">{title}</h3>
                <img className="imgcre" src={process.env.PUBLIC_URL +`../${img}`} alt='hey'></img>
        </div>
    );
};

export default Card;