function stringChop(str, size) {
  // your code here
	function stringChop(str, size) {
    let result = [];
	 if (!str) { 
        return result;
    }
    
    for (let i = 0; i < str.length; i += size) {
		let string=str.slice(i, i + size)
        result.push(string);
    }
    
    return result;
}





// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
