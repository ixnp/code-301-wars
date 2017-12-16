function test(el, index, arr){
    return (arr.includes(el+1) || arr.includes(el-1));
  }
  
  function isNice(arr){
  return arr.every(test);
  }