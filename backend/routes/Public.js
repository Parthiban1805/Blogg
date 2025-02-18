import express from "express";
import { Getsinglepost } from "../controllers/Public.js";

const PublicRoutes=express.Router()

PublicRoutes.get('/singlepost',Getsinglepost)

export default PublicRoutes