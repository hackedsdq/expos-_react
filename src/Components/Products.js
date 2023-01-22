import React,{useState, useEffect} from 'react';
import Header from './static_components/Header';
import Card from './static_components/Card';
import { Link } from 'react-router-dom';
function Products(props) {
    
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


    return (
        <>
        {products.length !== 0 && <div className="products" >
            <Header background={true} />
            <div className="contact-us">

            <div className="section">
                { 
                products.map((product, index)=>{
                return(
                <Link to={`/products/${product.title}`} state={{product}} > <Card index={index} img={product.img} title={product.title} /></Link>
                    
                )
                }) 
                }
            </div> 
</div>
        </div>}
        </>
    );
}

export default Products;