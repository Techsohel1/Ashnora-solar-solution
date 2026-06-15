import Inquiry from "../models/Inquiry.js";

export const postInquiry = async (req,res)=>{
    

  try {
    const { name, mobile, email, address, status, date } = req.body;
    const inquiry = new Inquiry({
      name,
      mobile,
      email,
      address,
      status,
      date,
    });

    const createdInquiry = await inquiry.save();
    res.status(201).json(createdInquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const readInquiry = async(req,res)=>{
    try {
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateInquiry = async(req,res)=>{
    

  try {
    const { status, date } = req.body;
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      if (status !== undefined) inquiry.status = status;
      if (date !== undefined) inquiry.date = date;

      const updatedInquiry = await inquiry.save();
      res.json(updatedInquiry);
    } else {
      res.status(404).json({ message: "Inquiry not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteInquiry = async (req,res) =>{
    try {
        const inquiry = await Inquiry.findById(req.params.id);
    
        if (inquiry) {
          await Inquiry.deleteOne({ _id: req.params.id });
          res.json({ message: "Inquiry removed" });
        } else {
          res.status(404).json({ message: "Inquiry not found" });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}