import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      default: "N/A",
      trim: true,
    },
    address: {
      type: String,
      default: "N/A",
      trim: true,
    },
    status: {
      type: String,
      enum: ["Scheduled", "Completed", "Cancelled"],
      default: "Scheduled",
    },
    date: {
      type: String,
      default: () => {
        return new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) + ", " + new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);
export default Inquiry;
