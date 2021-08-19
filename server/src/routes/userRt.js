import express from "express";
import { indexHome } from "../controllers/userCon.js";

export const userRt = express();
    userRt.get("/", indexHome);



