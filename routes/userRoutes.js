import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.fetchAll);
router.get("/:id", userController.fetch);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
