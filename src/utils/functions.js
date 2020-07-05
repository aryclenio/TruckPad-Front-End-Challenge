export function SortBy(property) {
  let order = 1;
  if (property[0] === "-") {
    order = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * order;
  }
}

export function validateCnhType(obj) {
  return Object.keys(obj).every((k) => !obj[k])
}