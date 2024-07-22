function curriedAdd(numberArray) {
    if (!numberArray) {
        return 0;
    } else {
        let sum = 0;
        return function add(numberArray) {
            for (let int of numberArray) {
                sum += int  
            }
            return sum
        }
    }
        
}



module.exports = { curriedAdd };
