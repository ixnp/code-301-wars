function filter_list(array) {
    
    const newList = array.filter(arr => Number.isInteger(arr))
    return newList;
    }
    