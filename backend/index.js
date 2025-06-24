const express = require('express');
const cors= require('cors');
const {Contact,Counsellor,Career,Resume} = require('./model');

const app= express();

app.use(express.json());
app.use(cors());


const multer = require("multer");
const mongoose = require("mongoose");




// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

// POST /upload route
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, position } = req.body;

    const resumeEntry = new Resume({
      name,
      email,
      position,
      resume: {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer
      }
    });

    await resumeEntry.save();
    res.json({ message: "Resume uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upload resume." });
  }
});

app.get("/resume/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume || !resume.resume) {
      return res.status(404).send("Resume not found");
    }

    res.set("Content-Type", resume.resume.contentType);
    res.set("Content-Disposition", `inline; filename="${resume.resume.filename}"`);
    res.send(resume.resume.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching resume");
  }
});




app.post("/contact", async (req, res) => {

    try{
        const contact =req.body;
        console.log("Received contact data:", contact);

        await Contact.create({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            company: contact.company,
            inquiryType: contact.inquiryType,
            service: contact.service,
            message: contact.message
        });

        res.status(201).json({ message: "Contact created successfully" });
        console.log("Contact created successfully");
    }catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.post("/counsellor", async (req, res) => {

    try{
        const counsellor =req.body;
        
        console.log("Received counsellor data:", counsellor);

        await Counsellor.create({
            selectedService: counsellor.selectedService,
            preferredDate: counsellor.preferredDate,
            preferredTime: counsellor.preferredTime,
            name: counsellor.name,
            email: counsellor.email,
            phone: counsellor.phone,
            company: counsellor.company,
            message: counsellor.projectDescription,
            budgetrange: counsellor.budget,
            timeLine: counsellor.timeline
        });

        res.status(201).json({ message: "Conselling created successfully" });
        console.log("Counselling created successfully");
        
    }catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/careers", async (req, res) => {
    try{
        const career=req.body;
        console.log("Received career data:", career);

        await Career.create({
            name: career.name,
            email: career.email,
            position: career.position,
            message: career.message,
            
        })

        res.status(201).json({ message: "Career created successfully" });
    }
    catch (error) {
        console.error("Error creating career:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});