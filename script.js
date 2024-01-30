function stringChop(str, size) {
  // your code here
	let ans=[];
	let n=str.length;
	if(n<=size){
		ans.push(str);
		return ans;
	}
	
	
	let temp="";
	
	let quo=Math.floor(n/size);
	let idx=0;
	
	for(let i=0;i<quo;i++){
		let j=0;
		while(j<size){
			temp+=str.charAt(idx++);
			j++;
		}
		ans.push(temp);
		temp="";
	}
	while(idx<n){
		temp+=str.charAt(idx++);
	}
	ans.push(temp);
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));  
