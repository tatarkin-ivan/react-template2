import WorkSkill from "../workSkill";
import Product from "../Product/product";
import "./userInfo.css";

function UserInfo({data}){
    console.log(data);

    const Pets = [{'name': 'cat', 'price': 200, 'className': 'active'}, {'name': 'dog', 'price': 400}, {'name': 'snake', 'price': 1000}];
    const Toys = [{'name': 'ball', 'price': 200}, {'name': 'doll', 'price': 400}, {'name': 'baloon', 'price': 1000}];



    let PetsV = Pets.map((item) => {
        console.log(item);
        return(
            <Product key={item.name} data={item}/>
        );
    }) 

    let ToysV = Toys.map((item)=>{
        return(
            <Product key={item.name} data={item}/>
        )
    })

    

    return (
        <>
            <div>
                <h2>Name: {data.firstName}</h2>
                <h2>Age: {data.age}</h2>
                <h2>Gender: {data.gender}</h2>
            </div>
            <div>
                <WorkSkill workSkill={data.workSkill}/>
                <br/>
                <h2>Животные:</h2>
                {PetsV}
                <h2>Игрушки:</h2>
                {ToysV}
            </div>        
        </>
    );
}

export default UserInfo;