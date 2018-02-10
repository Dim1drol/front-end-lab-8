var getEUR = +prompt("Input Euro nominal:","");
var getUSD = +prompt("Input USD nominal:","");

var courseEUR = 33.0700;//for 10/02/18
var courseUSD = 27.0125; // for 10/02/18

var convEUR = getEUR*courseEUR;
var convUSD = getUSD*courseUSD;
var conv = getEUR/getUSD;

if(getUSD<=0||getEUR<=0){
	console.log("Incorrect input")
}
else {

console.log("For data: " + getEUR+ "," + getUSD  +" : " + "\n" + 
getEUR + " euro(s) are equal " + convEUR.toFixed(0) + " UAH," + getUSD + " dollars are equal " + convUSD.toFixed(0) + " UAH," +
" one euro is equal " + conv + " dollars. "         )
}