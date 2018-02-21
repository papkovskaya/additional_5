module.exports = function check(str, bracketsConfig) {
  let n = str.length;
  let check_arr = {};
  let brackets = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]){
        
      } else {
        if (str[i] == bracketsConfig[j][0]) {
          brackets.push(str[i]);
        }
        if (str[i] == bracketsConfig[j][1]) {
          if (brackets == []) {
            return false;
          }
          let temp = brackets.pop();
          if (temp != bracketsConfig[j][0]) {
            return false;
          }
        }
      }
    }
  }
  if (brackets.length != 0){
    return false;
  }
  return true; 
}
