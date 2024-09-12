
const Mission1 = (arr) => {
    const newArr = arr.filter(x => x % 2 == 0 )
    return newArr
}

const Mission6  = (num) => {
    if (num == 0)
        return 0;
    if (num == 1)
        return 1;
    return Mission6(num - 1) + Mission6(num - 2);
}










// model.exports = {

// }