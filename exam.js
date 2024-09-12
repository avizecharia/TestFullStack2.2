const Mission1 = (arr) => {
  const newArr = arr.filter((x) => x % 2 == 0);
  return newArr;
};
const Mission4 = (arr) => {
  let boolUp = true;
  let boolDom = true;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[index + 1]) {
      boolUp = false;
    }
  }
  if (boolUp) {
    return 1;
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < arr[index + 1]) {
      boolDom = false;
    }
  }
  if (boolDom) {
    return 2;
  }
  return 0;
};

const Mission5 = (arr1, arr2) => {
  let newObj = {};
  let length = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    newObj[arr1[i]] = arr2[i];
  }
  return newObj;
};

const Mission6 = (num) => {
  if (num == 0) return 0;
  if (num == 1) return 1;
  return Mission6(num - 1) + Mission6(num - 2);
};

model.exports = {
Mission1,
Mission4,
Mission5,
Mission6
}
