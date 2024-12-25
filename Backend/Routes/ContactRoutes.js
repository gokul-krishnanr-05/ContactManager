const express = require("express");
const router = express.Router();
const Cmodel = require("../Models/Schema");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//creating new contacts
router.post("/contact", async (req, res) => {
  const Contact = new Cmodel({
    Name: req.body.Name,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Address: req.body.Address,
  });
  try {
    const NewContact = await Contact.save();
    res.status(200).json(NewContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//get whole contacts

router.get("/contact", async (req, res) => {
  try {
    const Contact = await Cmodel.find();
    res.json(Contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get a single contact using the id

router.get("/contact/:id", async (req, res) => {
  try {
    const contact = await Cmodel.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update the contact details

router.put('/contact/:id', async(req, res)=>{
    try{
        const ContactUpdate=await Cmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(ContactUpdate)
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})
//deleting a contact
router.delete('/contact/:id', async(req, res)=>{
    try{
       const ContactDelete= await Cmodel.findByIdAndDelete(req.params.id)
        if(!ContactDelete){
            return res.status(404).json({message: 'Contact not found'})
        }
        res.json({message:"Contact Deleted Successfully"})
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})



module.exports = router;
