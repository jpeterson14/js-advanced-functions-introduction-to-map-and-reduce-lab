// Your code here
const mapToNegativize = (sourceArray) => {
    let negativeArray = []
    sourceArray.forEach( num => {
    let x = num * -1
    negativeArray.push(x)
    })
    return negativeArray
}
const mapToNoChange = (sourceArray) => {
    let sameArray = []
    sourceArray.forEach( num => {
    let x = num 
    sameArray.push(x)
    })
    return sameArray
}
const mapToDouble = (sourceArray) => {
    let doubledArray = []
    sourceArray.forEach( num => {
    let x = num * 2
    doubledArray.push(x)
    })
    return doubledArray
}
const mapToSquare = (sourceArray) => {
    let squaredArray = []
    sourceArray.forEach( num => {
    let x = num * num
    squaredArray.push(x)
    })
    return squaredArray
}


