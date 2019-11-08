/* @Purpose: calender.js file Supporting Functions
*/

var calender = []

for(var i=0;i<6;i++)
{
		calender[i]=new Array(7)
	}

	var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	module.exports.initCal=function () 
	{
		for (var i = 0; i < calender.length; i++) {
			for (var j = 0; j < calender[i].length; j++) {
				calender[i][j] = -10;
			}
	
		}
	}

	 module.exports.display=function(m) {
		console.log("S  M  T  W  T  F  S");

		for (var i = 0; i < calender.length; i++) {
			for (var j = 0; j < calender[i].length; j++) {
				if (calender[i][j] < 0 || calender[i][j] > month[m - 1]) {
					//console.log("\t ");
				} else if (calender[i][j] > 0) 
				{
					
					console.log("\t" + calender[i][j] + " ");
					
				}
			}
			console.log("\t");
		}
	//	console.log(calender.join('\n'))
	}
 module.exports.putCalender=function(d) {
		var d1 = 1;
		for (var i = d; i < calender[0].length; i++) {
			
			calender[0][i] = d1++;
		}
		for (var i = 1; i < calender.length; i++) {
			for (var j = 0; j < calender[i].length; j++) {
				calender[i][j] = d1++;
			}
		}

	}

	 module.exports.dispCalender=function(m,y) {
		var d = this.dayOfWeek(m, y);
		//console.log("day............."+d)
		//this.initCal();
		this.putCalender(d);
		this.display(m);

	}

	 module.exports.dayOfWeek=function(m, y) 
                    {
						var d=1;
                    var yy = y - (((14 - m) / 12))
                        var y0= parseInt(yy)
                    
                        var x = (y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(yy / 400))
                        var x1=parseInt(x)
                        var m0 = (m + (12 * ((14 - m) / 12)) - 2)
                        var d0 = (d + x1 + (31 * m0 )/ 12) % 7
                        return d0
                    }




