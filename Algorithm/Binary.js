var util=require('./Util')
const rl=require('readline-sync')
            
            console.log("enter a no");
			var binary = new Array();
			binary=util.toBinary(parseInt(rl.question('')));
            
            console.log("binary is ");
			showArr(binary);
			
			this.swapNibbles(binary);
			console.log("after swapping ");
            this.showArr(binary);

			var swapDec = this.toDecimal(binary);
			console.log("decimal of swapped binary is ",swapDec);

			if (this.powerOf2(swapDec))
				console.log("its power of 2");
			else
				console.log("not power of 2");
        
	/*
	 * Function to print array
	 *
	 * @param arr the array to print integer on console
	 */
   
   function showArr(arr) 
    {
        for (var i = 0; i < arr.length; i++) 
        {
		console.log(arr[i]);
		}
		console.log()
	}

	/**
	 * Function to check if no is power of 2
	 *
	 * @param number to check the for power of 2
	 * @return boolean for prime no
	 */
    function powerOf2(n) 
    {
		// calculate power of 2 using math.pow
		// check if is equal to given no
		// stops if pow is greater than given number
		var i = 0,temp=0;
        while (temp < n) 
        {   temp = parseInt(Math.pow(2, i));
            if (temp == n) 
            {
				return true;
			}
			i++;
		}
		return false;
	}

	/**
	 * Function to swap nibbles in array
	 *
	 * @param int array to swap nibbles in array
	 * @return return swapped array
	 */
    function swapNibbles(arr) 
    {
		// swap nibbles at first and last of the array
		// j is used for saving last 4 index of the array
		var temp, j = arr.length - 4;
		for (var i = 0; i < 4; i++) { // loop runs 4 times and swap first four element to last four elements
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			j++;
		}
		return arr;
	}

	function toDecimal(binary)
	{
		var dec=0,j=0;

		for(var i=binary.length-1;i>=0;i--)
		{
			if(binary[i]==1)
			{
				dec=dec + parseInt(Math.pow(2,j));
			}
			j++;
		}
		return dec
	}
		
			

			
	 
