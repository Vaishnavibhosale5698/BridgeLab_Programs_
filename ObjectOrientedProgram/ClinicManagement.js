/*****************************************************************************************************************************/
//  * @description : manage a list of Doctors associated with the Clinique. 
//  *                 This also manages the list of patients who use the clinique. It manages Doctors by Name, Id, Specialization 
//  *                 and Availability (AM,  PM or both). It manages Patients by Name, ID, Mobile Number and Age. 
//  *                 The Program allows users to search Doctor by name, id, Specialization or Availability. 
//  *                 Also the programs allows users to search patient by name, mobile number or id. The programs allows patients
//  *                 to tsssake appointment with the doctor. A doctor at  any availability time can see only 5 patients. 
//  *                 If exceeded the user can take appointment for patient at different date or availability time.
//  *                 Print the Doctor Patient Report. 
//  *  @file        : ClinicManagement.js
//  *  @overview    : To create a JSON file . 

/*****************************************************************************************************************************/

const D = require('/home/admin1/Bridgelabz_Programs/ObjectOrientedProgram/ClinicManagementUtil.js');
const file = require('fs');
const read = require('readline-sync');

var data = file.readFileSync('ClinicManagement.json');
var object = JSON.parse(data)

var patient = new D.Patient;
var doctor = new D.Doctor;
var clinic = new D.Clinic;
while (number != 5) 
{
    console.log("\n\t\t|-----Clinique Management---------|");
    console.log("\t\t|                             \t  |");
    console.log("\t\t| 1.Search for Doctors\t\t  |");
    console.log("\t\t| 2.Search for Patients\t\t  |");
    console.log("\t\t| 3.Take Appointment from Doctors |");
    console.log("\t\t| 4.Appointment Details\t\t  |");
    console.log("\t\t| 5.Exit     \t\t\t  |");
    console.log("\t\t|                              \t  |");
    console.log("\t\t|---------------------------------|\n");
    var number = read.question("Enter your Choice?: ");
    console.log();

    switch (parseInt(number)) 
    {
        case 1:
            doctor.searchDoctor(object)
            break;

        case 2:
            patient.searchPatient(object)
            break;

        case 3:
            doctor.appointment(object)
            break;

        case 4:
            clinic.showReport(object)
            break;

        case 5:
            console.log("Exiting the Program...!")
            break;
            
        default:
            console.log("Please Enter correct choice!! ");
    }
}