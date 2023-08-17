import express from "express";

import { loginUser, registerUser, updateProfile ,aboutUpdate, addCertificate, education,getDetails, addSkills, experiance, editexperiance, editCertificate, editSkills, editEducation} from "../Controller/userController.js";
import multer from "multer";

const Routes = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

Routes.post('/register',registerUser)
Routes.post('/login',loginUser)
Routes.post('/update',updateProfile)
Routes.post('/about',aboutUpdate)
Routes.post('/certificate',addCertificate)
Routes.post('/editcertificate',editCertificate)
Routes.post('/skill',addSkills)
Routes.post('/editskill',editSkills)
Routes.post('/education',education)
Routes.post('/editeducation',editEducation)
Routes.post('/experiance',experiance)
Routes.post('/editexperiance',editexperiance)
Routes.get('/',getDetails)

export default Routes