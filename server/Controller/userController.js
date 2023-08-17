
import User from "../models/userSchema.js"

export const registerUser = async (req, res) => {
    const { name, email, phone, password, image } = req.body
    if (name && email && phone && password && image) {
        // Check If given email or phone number already exists
        const checkUnique = await User.findOne({ email: email }) || await User.findOne({ phone: phone })
        if (checkUnique) {
            res.json({ alert: "Email Or Mobile Number Already Exists" })
        } else {
            // check that passsword contains more than 6 letters
            if (password.length < 6) {
                res.json({ alert: "Password Too Short" })
            } else {
                // Create New User
                const Register = await new User({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    image: image
                })
                if (Register) {
                    res.json({ success: "User Registered Successfully" })
                   await  Register.save()
                } else {
                    res.json({ error: "Something Went Wrong" })
                }
            }
        }
    } else {
        res.json({ alert: "All Fields Are Required" })
    }
}

export const getDetails = async (req, res) => {
    const { _id } = req.query;
    const findUser = await User.findById(_id);
    if (findUser) {
        res.json(findUser)
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const findUser = await User.findOne({ email: email })
        if (findUser) {
            const checkPassword = await findUser.password === password
            if (checkPassword) {
                res.json({ success: "Login Success", data: findUser })
            } else {
                res.json({ alert: "Password Is Incorrect" })
            }
        } else {
            res.json({ alert: "Email Is Not Registered" })
        }
    } else {
        res.json({ alert: "Email And Password Is Required" })
    }
}

export const updateProfile = async (req, res) => {
    const { _id, name, image, email, phone } = req.body
    try {
        const findUser = await User.findById(_id);

        if (findUser) {
            findUser.name = name;
            findUser.image = image;
            findUser.email = email;
            findUser.phone = phone;
            const updatedUser = await findUser.save();
            res.json({ success: "profile updated", data: updatedUser });
        } else {
            res.json({ alert: "Login Again To Continue" });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the profile." });
    }

}

export const aboutUpdate = async (req, res) => {
    const { about, _id } = req.body
    const findUser = await User.findById(_id);
    if (findUser) {
        findUser.about = about;
        await findUser.save()
        res.json({ about: findUser.about })
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const experiance = async (req, res) => {
    const { company, year, session, role, type, _id } = req.body
    const findUser = await User.findById(_id);
    if (findUser) {
        const data = {
            company: company,
            year: year,
            role: role,
            session: session,
            type: type
        }
        findUser.experiance.push(data);
        await findUser.save();
        res.json({ experiance: findUser.experiance })
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const addCertificate = async (req, res) => {
    const { certificate, _id } = req.body;

    const findUser = await User.findById(_id);
    if (findUser) {
        const data = {
            certificate: certificate
        }
        await findUser.certificate.push(data)
        await findUser.save()
        res.json({ certificate: findUser.certificate })
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const editEducation = async (req, res) => {
    const { course, university, session, detail, _id,id } = req.body;
    const Detail = detail;
    const findUser = await User.findById(_id);
    if (findUser) {
      const exp =  findUser.education;
      const detail = await exp.find(obj => obj._id == id)
      if(detail){
              detail.course = course;
              detail.university = university;
              detail.session = session;
              detail.detail = Detail;
              await findUser.save();
              res.json({education:"Updated"})
      }else{
          res.json({alert:"No data found"})
      }
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const editSkills = async (req, res) => {
    const { skill, _id,id } = req.body;
    const findUser = await User.findById(_id);
    if (findUser) {
        const exp =  findUser.skills;
      const detail = await exp.find(obj => obj._id == id)
      if(detail){
              detail.skill = skill;
              await findUser.save();
              res.json({skill:"Updated"})
      }else{
          res.json({alert:"No data found"})
      }
    } else {
        res.json({ alert: "User Not Found" })
    }
}
export const editexperiance = async (req, res) => {
    const { company, year, session, role, type, _id,id } = req.body
    const findUser = await User.findById(_id);
    if (findUser) {
      const exp =  findUser.experiance;
      const detail = await exp.find(obj => obj._id == id)
    if(detail){
            detail.company = company;
            detail.year = year;
            detail.session = session;
            detail.role = role;
            detail.type = type;
            await findUser.save();
            res.json({experiance:"Updated"})
    }else{
        res.json({alert:"No data found"})
    }
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const editCertificate = async (req, res) => {
    const { certificate, _id,id } = req.body;

    const findUser = await User.findById(_id);
    if (findUser) {
        const exp =  findUser.certificate;
        const detail = await exp.find(obj => obj._id == id)
        if(detail){
           detail.certificate = certificate;
            await findUser.save();
            res.json({certificate:"Updated"})
    }else{
        res.json({alert:"No data found"})
    }
    } else {
        res.json({ alert: "User Not Found" })
    }
}
export const education = async (req, res) => {
    const { course, university, session, detail, _id } = req.body;
    const findUser = await User.findById(_id);
    if (findUser) {
        const data = {
            course, university, session, detail
        }
        await findUser.education.push(data)
        await findUser.save()
        res.json({ education: findUser.education })
    } else {
        res.json({ alert: "User Not Found" })
    }
}

export const addSkills = async (req, res) => {
    const { skill, _id } = req.body;
    const findUser = await User.findById(_id);
    if (findUser) {
        const data = {
            skill: skill
        }
        await findUser.skills.push(data)
        await findUser.save()
        res.json({ skill: findUser.skills })
    } else {
        res.json({ alert: "User Not Found" })
    }
}

