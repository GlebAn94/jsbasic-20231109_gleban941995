function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

console.log(isEmpty(schedule)); // false
