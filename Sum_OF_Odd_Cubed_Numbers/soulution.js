function cubeOdd(arr) {
    
    let newList = arr.filter(arr => arr % 2 === 1 || arr % 2 === (-1))
    let newListTwo = newList.map(i => Math.pow(i,3 ));
    console.log(newListTwo);
    return newListTwo.reduce((previous, current)=> previous + current);
    
    }
//was unable to get it to return undefined ifNAN//    