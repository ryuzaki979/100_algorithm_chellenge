function sum(params1,params2){
    return params1 + params2;
  };
  console.log( sum(1,2) );
  
  function totalsum(...params1){
    let total = 0;
    params1.forEach( perElem => {
      total += perElem;
    });
    return total;
  };
  
  console.log(totalsum(1,2,6,8,6,7,8,8,7,));