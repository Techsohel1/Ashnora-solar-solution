import express from "express";

import protect from "../middleware/authMiddleware.js";
import { adminLogin } from "../controller/auth.js";
import { updatePassword } from "../controller/auth.js";

const AdminRouter = express.Router();


AdminRouter.post("/login", adminLogin);

AdminRouter.put("/password", protect, updatePassword);

export default AdminRouter;
