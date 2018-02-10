var s1 = +prompt("Input first side of triangle","");
var s2 = +prompt("Input second side of triangle","");
var s3 = +prompt("Input third side of triangle","");

var p = (s1+s2+s3)/2;
var squ = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
var txt = "";


  if ( s1*s1 + s2*s2 == s3*s3|| s1*s1 + s3*s3== s2*s2 || s3*s3 + s2*s2 == s1*s1){
	txt = "Right"
}	

else  if (s1==s2&&s1==s3&&s2==s3) {
	txt = "Equilateral"
	
}
else if (s1==s2||s2==s3||s1==s3){
	txt = "Isosceles "
	
}
else if(s1!=s2!=s3) {
	txt = "Scalene"
	
}
	if (s1 <=0||s2<=0||s3<=0){
	console.log( "For data"+" "+s1+","+s2+","+s3+":"+"\n"+ 
		"Incorrect data")
}
else{
alert("For data"+" "+s1+","+s2+","+s3+":"+"\n"+
		" Type of triangle is" + " "+txt+" "+ "and square is "+" "+squ.toFixed(2)) 
}


