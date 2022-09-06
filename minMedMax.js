const { template } = require('@babel/core')
    let temp
function minMedMax(n1, n2, n3) {
  if(n1 > n2){
    temp = n1
    n1 = n2
    n2 = temp
  } if(n1 > n3){
    temp = n1
    n1 = n3
    n3 = temp
  } if(n2 > n3){
    temp = n3
    n3 = n2
    n2 = temp
  } return { "min": n1, "mid": n2, "max": n3 }
}
module.exports = minMedMax
