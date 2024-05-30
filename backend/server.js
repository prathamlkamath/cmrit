const express = require('express')
const app= express()
const cors=require('cors')
// const nodemailer=require('nodemailer')
const port=5000;
const mongoose=require('mongoose')
const Usermodel=require('./Schema/schema')
const cmpModel=require('./Schema/camp')
const sendEmails =require('./sendMail')
// mongoose.connect('mongodb://127.0.0.1:27017/trt')
mongoose.connect('mongodb+srv://u2:1234@cluster1.nk68wj4.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log(" --> Connected to Db"))
.catch((e)=>{console.log(e)})
// mongodb://localhost:27017
app.use(express.json());
app.use(cors());

app.get('/helo',(req,res)=>{
    res.status(201).send({message:"hello"})
})

app.post('/register', async(req,res)=>{
   
    try{
        const newuser= new Usermodel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
            age:req.body.age,
            location:req.body.location,
            blood:req.body.blood //here
        })

       await newuser.save();
       
       res.status(201).json({ message: 'Registration successful' });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
})

app.post('/login',async (req,res)=>{
    const {email,password,role}=req.body;
    try{

        const user = await Usermodel.findOne({ email: email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (password === user.password) {
            console.log(user.role)
            if(user.role === "admin"){
                res.status(200).json({ message: "welcome to admin panel !",role:"admin" });
                
            }else{

                res.status(200).json({ message: "User logged in successfully!",role:"" });
            }
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }

    }catch(e){
        console.error('Error logging in:');
        res.status(500).json({ message: 'Internal server error' });
  
    }

})

app.get('/api/users', async (req, res) => {
    try {
        const users = await Usermodel.find();
        
        if (!users || users.length === 0) {
          return res.status(404).json({ error: 'No users found' });
        }
        res.json(users);
      } catch (error) {
        console.error('Error fetching user list:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  });
  

// adding the camp details in this route
  app.post('/addcamp', async (req, res) => {
    try {
        
        const { location, timing, date, docname, desc } = req.body;
        const existingCamp = await cmpModel.findOne({ location, time: timing, date });
        
        
        if (existingCamp) {
          
            return res.status(400).json({ error: 'Duplicate data found' });
        }
       
        const newCamp = new cmpModel({
            location: location,
            time: timing,
            date: date,
            docname:docname,
            desc :desc
        });

     
        await newCamp.save();


       const usersInLocation = await Usermodel.find({ location: location });
        console.log(usersInLocation+"\n******   end *****\n");
        // const d=usersInLocation.length;
       
        sendEmails(usersInLocation,newCamp);//changed

        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
       
        res.status(500).json({ error: error.message });
    }
});

// fetching the details of the camp in this route
app.get('/getcamp',async(req,res)=>{
    try {
     
        const camps = await cmpModel.find();

      
        res.status(200).json(camps);
    } catch (error) {
      
        res.status(500).json({ error: error.message });
    }
})

app.delete('/deletecamp/:id', async (req, res) => {
    try {
        const { id } = req.params;

      
        const deletedCamp = await cmpModel.findByIdAndDelete(id);

        if (!deletedCamp) {
            return res.status(404).json({ error: 'Camp not found' });
        }

       
        res.status(200).json({ message: 'Camp deleted successfully' });
    } catch (error) {
     
        res.status(500).json({ error: error.message });
    }
});

app.listen(port,()=>console.log(`listening to port ${port}`))