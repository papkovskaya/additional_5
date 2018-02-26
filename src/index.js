module.exports = function check(str, bracketsConfig) {
  let n = str.length;
  let brackets = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1] && brackets[brackets.length - 1] == bracketsConfig[j][0]) {
        k--;
        brackets.pop();
      } else if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]) {
        k++;
        brackets.push(str[i]);
      } else if (str[i] == bracketsConfig[j][1] && k == 0) {
        return false;
      } else if (str[i] == bracketsConfig[j][1] && brackets[brackets.length - 1] != bracketsConfig[j][0]) {
        return false;
      } else if (str[i] == bracketsConfig[j][1] && brackets[brackets.length - 1] == bracketsConfig[j][0]) {
        k--;
        brackets.pop();
      }
      if (str[i] == bracketsConfig[j][0] && str[i] != bracketsConfig[j][1]) {
        k++;
        brackets.push(str[i]);
      }
    }
  }
  if (brackets.length != 0){
    return false;
  }
  if (k != 0){
    return false;
  }
  return true;
}