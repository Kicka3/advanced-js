function findOutlier(integers){
	var isOdd = true;
	if (integers[0]%2 == 0){
	  // even
	  if (integers[1]%2 == 0){
		 // even even
		 isOdd = false;
	  } else{
		 // even odd
		 if(integers[2]%2 ==0){
			// if even odd even, return odd
			return integers[1];
		 } else{
			// else if even odd odd, return even
			return integers[0];
		 }
	  }
	} else{
	  // odd
	  if (integers[1]%2 == 0){
		 // odd even
		 if (integers[2]%2 == 0){
			// if odd even even, return odd
			return integers[0];
		 } else{
			// if odd even odd, return even
			return integers[1];
		 }
	  }
	}
	
	if(isOdd == true){
	  for(var i=2; i<integers.length; i++){
		 if(integers[i]%2 == 0) return integers[i];
	  }
	} else{
	  for(var i=2; i<integers.length; i++){
			if(integers[i]%2 != 0) return integers[i];
		 }
	}
 }