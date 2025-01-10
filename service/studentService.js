
const student = require('../model/student');


async function getStudents(){
    try{
       let studentList = await student.find();
       return studentList;
    }
    catch(err){
      return err;
    }
}


async function regesterStudent(stud){
    try{
      let record_student = await student.create(stud);
      return record_student;
    }
    catch(err){
      return err;
    }
}

async function updateStudentDetails(stud_id,studentdetails){
    try{
        let update_record = await student.findByIdAndUpdate({'_id':stud_id},{$set: studentdetails});
       
        return update_record;
    }
    catch(err){
        return err;
    }

}

async function deleteRecord(stuid){
    try{
        let delete_op = await student.findByIdAndDelete({'_id':stuid});
        return delete_op;
    }
    catch(err){
        return err;
    }
}

module.exports = {getStudents,regesterStudent,updateStudentDetails,deleteRecord}