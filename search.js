function linearSearch(arr,target){
    for(let i=0; i < arr.length; i++){
        if(arr[i]=== target){
            return i
        }
    }
    return -1
}

function linearSearchRecursive(arr, target){
    if(arr[arr.length - 1] === target){
        return arr.length-1
    }
    else if (arr.length === 0){
        return -1
    }
    return linearSearchRecursive(arr.slice(0,-1), target)
}



function binarySearch(arr,target){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end)/2)
    while(arr[middle] !== target && start <= end){
        if(arr[middle] < target){
            start = middle + 1;
        } else {
            end = middle-1
        }
        middle = Math.floor((start+end)/2)
    }
    return arr[middle] === target ? middle : -1
}

function binarySearchRecursive(arr, target){
    if(arr.length === 0){
        return -1 };
        let middle = Math.floor(arr.length -1/2)
        if(target === arr[middle]){
            return middle
        } else if (target > arr[middle]){
            return binarySearchRecursive(arr.slice(middle + 1), target)
        } else if(target < arr[middle]){
            return binarySearchRecursive(arr.slice(0, middle), target)
        }
}

