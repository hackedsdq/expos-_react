import React, { useState, useEffect }  from 'react'
import Card from './static_components/Card';
import Header from './static_components/Header';

const Main = () => {

const [products, setProducts] = useState([]);

useEffect(()=>{
 handleGetData()
}, [])

const handleGetData = async() => {
    let master_key = '$2b$10$Tva5oYkEs6orOQXwNb.X0.kCXDt3Y7RLIGjCOgeTlvFBzSBZT98qu';
    let access_key = '$2b$10$gfOJC4BlInMsxzvFLcwGJesv5TqGp5NKjqnaYSS6id.xIbCI6sXf.'
    let api = 'https://api.jsonbin.io/v3/b/63adf4badfc68e59d573a0e6/latest'
    let resp = await fetch( api ,{
            method:'get',
            headers : {
             'X-Master-Key' : master_key,
             'X-Access-Key' : access_key
            }
    })
    .then(e => e.json())
    .then(data => {
        //console.log(data.record.products)
        setProducts(data.record.products)
    })
    .catch(err => alert('failed to get data')) 
}

return(
<div >

    <Header />
    <div className="textheader">
    <h1>IMMERSIVE EXPERIENCE </h1>
    <h1>THAT DELIVER</h1>
    </div>

    <div className="main">
    <img className="imgmain" src={process.env.PUBLIC_URL +"../image-interactive.jpg"} alt='hey'></img>
    <div className="textbox">
    <h3>THE LEADER IN INTERACTIVE VR</h3>
    <h4>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</h4>
    </div>
    </div>
    
    <div className="creations">
        <h2>OUR CREATION</h2>
             <div className="section">
                { 
                products.map((product, index)=>{
                return(
                    <Card index={index} img={product.img} title={product.title} />
                )
                }) 
                }
            </div> 
    </div>
</div>
)

}

export default Main ;

