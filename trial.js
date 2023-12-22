let x=11;
try {
  x = Number(x)
  if(x < 5) throw "The number is too small, must bigger then"
  if(x >10)  throw "The number is too big, must smaller then"
  console.log(x)
} 
catch(error){
  console.log(error)
}
finally {
  console.log("Try catch ended")
}
