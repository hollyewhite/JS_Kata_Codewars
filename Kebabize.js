function kebabize(str) {

var result = str.replace( /([A-Z])/g, "-$1" ).replace(/[0-9]/g,"");
var finalResult = result.charAt(0) + result.slice(1); 

finalResult = finalResult.toLowerCase();

if (finalResult.indexOf("-") === 0) {
return finalResult.substr(1);
console.log(finalResult.substr(1));
}
else {
return finalResult;
}




   return finalResult;
}