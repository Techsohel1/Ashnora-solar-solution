import Quotation from "../models/Quotation.js";

export const postQuotation = async(req,res)=>{
    
  try {
    const { name, mobile, email, address, status, date } = req.body;
    const quotation = new Quotation({
      name,
      mobile,
      email,
      address,
      status,
      date,
    });

    const createdQuotation = await quotation.save();
    res.status(201).json(createdQuotation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


export const readQuotation = async (req,res)=>{
    try {
    const quotations = await Quotation.find({}).sort({ createdAt: -1 });
    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateQuotation = async (req,res)=>{
    

  try {
    const { status } = req.body;
    const quotation = await Quotation.findById(req.params.id);

    if (quotation) {
      if (status !== undefined) quotation.status = status;

      const updatedQuotation = await quotation.save();
      res.json(updatedQuotation);
    } else {
      res.status(404).json({ message: "Quotation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteQuotation = async (req,res)=>{
    try {
        const quotation = await Quotation.findById(req.params.id);
    
        if (quotation) {
          await Quotation.deleteOne({ _id: req.params.id });
          res.json({ message: "Quotation removed" });
        } else {
          res.status(404).json({ message: "Quotation not found" });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}