import "./product.css";

function Product(props){
    console.log(props);
    
    //const homePetsNew = homePets.map((item) => <div key={item}>{item}</div>);

    //console.log(homePetsNew);
    
    const price = `${props.data.className?props.data.className:''} price`.trim();

    // const str = `  5`;

    // console.log(str);

    return (
        <>
            <div> 
                <h2 style={{color:'red', fontStyle:'italic'}}>Название: {props.data.name}</h2>  
                <h2>Цена: <span className={price}>{props.data.price}</span></h2>  
            </div>        
        </>
    );
}

export default Product;