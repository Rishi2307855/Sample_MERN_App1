let mongoose=require('mongoose');
let taskSchema=new mongoose.Schema({
    task_name:{
        type:String,
        required:true
    },
    task_description:{
        type:String,
        required:true
    },
    task_duedate:{
        type:Date,
        required:true
    },
    task_assignedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    task_assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    task_status:{
        type:String,
        enum:['pending','inprogress','completed'],
        default:'pending'
    }
},{
    timestamps:true
})
const task=mongoose.model('task',taskSchema);
module.exports={task}