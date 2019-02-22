function mul(a,b){
   // var a = Number(document.getElementById('a').value) 
   // var b = Number(document.getElementById('b').value) 
 

    return a*b;
    
    
}

  QUnit.test("mul", function(assert) {
	assert.equal(mul(2,4), 8, "multiplication of two numbers 2,4 gives 8");
	assert.equal(mul(20,7), 140, "multiplication of two numbers 20,7 gives 140");
	assert.equal(mul(50,3), 150, "multiplication of two numbers 50,3 gives 150");
	assert.equal(mul(25,8), 200, "multiplication of two numbers 25,8 gives 200");
	assert.equal(mul(500,1), 500, "multiplication of two numbers 500,1 gives 500");
 });