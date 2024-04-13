let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const output = arr.map((x) => {
        if (x.profession == "developer"){
            return x.name;}
    
        });
        console.log(output);
  }

  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const output = arr.forEach((x) => {
        if (x.profession == "developer"){
            return x.name;}
    
        });
        console.log(output);

    
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(obj);
    console.log(arr);
}
  
  function removeAdmin() {
    //Write your code here, just console.log
    for(let t of arr){
        if(t.profession=="admin"){
            delete arr.t;
        }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 11, name: "john1", age: "68", profession: "developer2" },
        { id: 22, name: "jack1", age: "80", profession: "developer1" },
        { id: 33, name: "karen1", age: "39", profession: "admin5" },
      ];
      console.log(arr.concat(arr1));

  }