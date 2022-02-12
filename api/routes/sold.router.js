import express from "express";
import { soldCtrl } from "../controllers/index.js";

const {
  getAllSolds,
  getOneSold,
  createSold,
  deleteSold,
  findSold,
  updateSold,
} = soldCtrl;

const router = express.Router();

const soldRoutes = {
  GET_ALL: "/solds/",
  GET_ONE: "/solds/:id",
  CREATE: "/solds/create",
  UPDATE: "/solds/update/:id",
  DELETE: "/solds/delete/:id",
};

router.get(soldRoutes.GET_ALL, getAllSolds);
router.get(soldRoutes.GET_ONE, getOneSold);
router.post(soldRoutes.CREATE, createSold);
router.put(soldRoutes.UPDATE, findSold, updateSold);
router.delete(soldRoutes.DELETE, deleteSold);

export default router;
