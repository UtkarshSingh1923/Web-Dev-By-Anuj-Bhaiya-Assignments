class Vehicle{
    constructor(wheels,isDeisel)
    {
        this.wheels=wheels ;
        this.isDeisel=isDeisel ;
    }
    drive(){
        console.log("the",this.wheels,"vehicle is running") ;
    }
    break()
    {
        console.log("the vehicle has stopped") ;
    }
} 
const ans=[] ;
//Multiple instances/objects of the class Vehicle
ans.push(new Vehicle("two-wheeler","No")) ;
ans.push(new Vehicle("three-wheeler","Yes")) ;
ans.push(new Vehicle("one-wheeler","No")) ;
ans.push(new Vehicle("four-wheeler","Yes")) ;

//Iterating through all the objects of type Vehicle
for(var i in ans)
{
    console.log(ans[i]) ;
}

//Converting the objects to JSON format
const json_data=JSON.stringify(ans[0]) ;

console.log(ans[0]) ;
console.log(json_data) ;

//---------------------------------------ASSIGNMENT COMPLETED----------------------------------------//