
const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://collegeegatee:WdlokQ4w50uYnqOD@cluster0.ymda94e.mongodb.net/NSDM");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    inquiryType:{
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    message: {
        type: String,   
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

const counsellorSchema = new mongoose.Schema({
    selectedService: {
        type: String,
        required: true
    },
    preferredDate: {
        type: String,
        required: true
    },
    preferredTime: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    budgetrange: {
        type: String,
        required: true
    },
    timeLine:{
        type: String,
        required: true
    }
})

const Counsellor = mongoose.model('Counsellor', counsellorSchema);

const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Career = mongoose.model('Career', careerSchema);

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  resume: {
    filename: String,
    contentType: String,
    data: Buffer
  }
});

const Resume= mongoose.model("Resume", resumeSchema);

module.exports = {
    Contact,
    Counsellor,
    Career  ,
    Resume
}


