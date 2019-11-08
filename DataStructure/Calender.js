/**
 * @Purpose:
 *          Write a program Calendar.java that takes the month and year as command-line arguments and 
 *          prints the Calendar of the month. Store the Calendar in an 2D Array, the first dimension
 *          the week of the month and the second dimension stores the day of the week. 
 * @file  : calender.js
 * 
 * @author: Vaishnavi Bhosale
 */	   
	 
	 var cl=require('./calender2DArray')
		var rl=require('readline-sync')
		console.log("enter month");
		var m = rl.questionInt(' ')
		console.log("enter yaer");
		var y = rl.questionInt(' ')
		cl.dispCalender(m, y);