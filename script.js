function threeSum(arr, target) {
// write your code here
	let diff,i,j,k ;
	let ans ;
	let min = Number.MAX_VALUE;
	for(let i=0;i<arr.length-2;i++){
		for(let j=0;j<arr.length-1;j++){
			let sum =0;
			for(let k=0;k<arr.length;k++){
				sum = arr[i] + arr[j]+ arr[k]
				diff = Math.abs(target-sum)
				if(diff < min){
					min = diff;
					a = arr[i];
					b = arr[j];
					c = arr[k]
				}
			}
		}
	}
	return a+b+c;
  
}

module.exports = threeSum;
