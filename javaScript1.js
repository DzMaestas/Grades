var num = 100
function testScore(num){
  if(num < 60 ){
      return "Grade F"
  }else if (num < 70 ){
      return "Grade D"
  }else if (num < 80){
      return "Grade C"
  }else if (num < 90){
      return "Grade B"
  }else if (num < 95){ 
      return "Grade A-"
  }else if(num ==95){
      return "Grade A"
  }else if (num < 100){
      return "Grade A+"
  }
}
  
console.log(testScore(89));