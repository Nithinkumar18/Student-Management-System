
const express = require('express');
const studentService = require('../service/studentService');
const router = express.Router();



router.get('/view', async(req,res) => {
    try{
       let usersList;
       usersList = await studentService.getStudents();
       if(usersList.length === 0){
         return res.status(300).json({message: "No Students Record found"})
       }
       else{
        return res.status(200).json(usersList);
       }
    }
    catch(err){
       return res.status(500).json({message:err.message});
    }
})


router.post('/add', async(req,res) => {
    try{
      let {studentName,student_age,student_email,student_address} = req.body;
      if(studentName == '' || student_age == ''|| student_email == '' || student_address == ''){
        return res.status(301).json({message: "Values cannot be empty!"})
      }
      else{
         const std = {
            studentName,student_age,student_email,student_address
         }
         let rec = await studentService.regesterStudent(std);
         return res.status(201).json({message: "Student Details Regestered!!"})
      }
    }
    catch(err){
       return res.status(500).json({message: err.message});
    }
})

router.put('/update/:id', async(req,res) => {
    try{
       const id = req.params.id;
       const update_details = req.body;
      
       let studentUpdate = await studentService.updateStudentDetails(id,update_details);
    
       if(!studentUpdate){
        return res.status(400).json({message: "Student not found with given id"});
       }
       else{
        return res.status(200).json({message:"Student record updated"})
       }
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
})

router.delete('/:id', async(req,res) => {
    try{
      const delrec = req.params.id;
      let del_op = await studentService.deleteRecord(delrec);
      if(!del_op){
        return res.status(400).json({message: "Delete Operation failed"});
      }
      else{
        return res.status(200).json({message:"Student Record Deleted"});
      }
    }
    catch(err){
       return res.status(500).json({message: err.message});
    }
})

module.exports = router;