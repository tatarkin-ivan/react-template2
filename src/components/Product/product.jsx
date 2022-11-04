import "./product.css";

function Product(props){
    console.log(props);
    
    //const homePetsNew = homePets.map((item) => <div key={item}>{item}</div>);

    //console.log(homePetsNew);
    
     

    return (
        <>
            <div> 
                <h2 style={{color:'red', fontStyle:'italic'}}>Название: {props.data.name}</h2>  
                <h2>Цена: <span className="price">{props.data.price}</span></h2>  
            </div>        
        </>
    );
}

export default Product;