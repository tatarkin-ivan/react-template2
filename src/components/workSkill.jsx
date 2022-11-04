function WorkSkill({workSkill}){
    console.log(workSkill);
    

    let str = "slice, map, reduce, concat, find, findIndex, sort, every, some, join, split";

    let arrStr = str.split(',');

    console.log(arrStr);

    let workSkillNew = workSkill.map((item) => {
        return(
            <div key={item}>{item}</div>
        );
        
    }) 
    
    // let workSkillReduce = workSkill.reduce(function(accumulator, item, index, originalValue){
    //     //console.log(item);
    //     accumulator.push(<p key={index}>{item}</p>);
    //     return accumulator;
    // }, []);

    // //console.log(workSkillReduce);

    // let workSkillSlice     = workSkill.slice(1,5);
    // console.log(workSkillSlice);
    // let workSkillConcat    = workSkill.concat("laundry","canteen")
    // console.log(workSkillConcat); 
    // let workSkillFind      = workSkill.find((e, i, arr) => e === "institute");
    // console.log(workSkillFind); 
    // let workSkillFindIndex = workSkill.findIndex((e,i,arr) => e === "institute");
    // console.log(workSkillFindIndex); 
    // workSkill.sort();
    // console.log(workSkill); 
    // let workSkillEvery     = workSkill.every((e, i, arr) => typeof(e) === "string");
    // console.log(workSkillEvery); 
    // let workSkillSome      = workSkill.some((e, i, arr) => typeof(e) === "string"); 
    // console.log(workSkillSome); 
    // let workSkillJoin      = workSkill.join(", ")
    // console.log(workSkillJoin);

    // const obj = {
    //     'a': 1,
    //     "b": 2,
    //     "c": 4,
    //     "d": 5
    // }
    
    // const objToArray = Object.entries(obj);

    // console.log(objToArray);

    // const objToArrayReduce = objToArray.reduce((acc, item, i, arr)=>{        
    //     acc.push(item[1]);
    //     return acc;
    // }, []);  

    // console.log(objToArrayReduce);
    // const allSumObjToArrayReduce = objToArrayReduce.reduce((acc, item) => {
    //     return acc + item;
    // });

    // console.log(allSumObjToArrayReduce); //сумма всех

    // const objToArrayReduceSlice = objToArrayReduce.slice(-2);
    // const sumObjToArrayReduce = objToArrayReduceSlice.reduce((acc, item) => {
    //     return acc + item;
    // });
    // console.log(sumObjToArrayReduce); //сумма двух последних

    // const objToArray2 = objToArray.reduce((acc, item, i, arr)=>{
    //     acc['total'] = acc['total'] + item[1];
    //     console.log(acc);

    //     if(item[0] === 'd' || item[0] === 'c'){
    //         acc['sumDC'] = acc['sumDC'] + item[1];
    //     }

    //     return acc;       
    // }, {total:0, sumDC:0})

    // console.log(objToArray2);




    return (
        <>
            <div>
                <h3>Стаж:</h3>
                {workSkillNew}
            </div>        
        </>
    );
}

export default WorkSkill;

//Создать объект, преобразовать в массив

//slice, map, reduce, concat, find, findIndex, sort, every, some, join, split