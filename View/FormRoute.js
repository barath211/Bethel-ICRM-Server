import express from "express";
import {
  CreateFamilyMember,
  ReadFamilyMembers,
  ReadAllFamilyMembers,
  FindUser,
  BaptismMembers,
  NonBaptismMembers,
} from "../Controller/FormCTRL.js";

export const FormRoutes = express.Router();

FormRoutes.post("/CreateFamilyMember/:AURTHOR", CreateFamilyMember);
FormRoutes.get("/ReadFamilyMembers/:PrimaryMobile", ReadFamilyMembers);
FormRoutes.get("/ReadAllFamilyMembers", ReadAllFamilyMembers);
FormRoutes.post("/FindUser", FindUser);
FormRoutes.get("/BaptismMembers", BaptismMembers);
FormRoutes.get("/NonBaptismMembers", NonBaptismMembers);
