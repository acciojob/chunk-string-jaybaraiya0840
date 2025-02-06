function stringChop(str, size) {
  // your code here

	string is null
    if (str === null) {
        return [];
    }

    let chunks = [];

    for (let i = 0; i < str.length; i += size) {
        // Use substring to get the chunk of the specified length
        chunks.push(str.substring(i, i + size));
    }

    return chunks;
}



// // Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
