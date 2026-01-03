import { User } from "../models/user.mjs";
import { BadRequestError } from "../utils/errors.mjs";
import bcrypt from "bcrypt"

class AuthController {
    regigterPage(req, res) {
        if (req.user) {
            return res.redirect("/")
        }
        return res.render("auth/register.ejs",
            {
                title: "Register"
            })
    }

    async regigter(req, res) {
        if (req.user) {
            return res.redirect("/")
        }
        const { username, password } = req.body

        if (!username || !password) {
            throw new BadRequestError("username and password are required!");
        }

        let user;
        try {
            const hashedPassword = bcrypt.hashSync(password, 12)

            user = await User.create({ username, password: hashedPassword })
        } catch (error) {
            // console.log({ errorCode: error.original.code, errorMsg: error.original.sqlMessage });
            if (error.original.code === 'ER_DUP_ENTRY') {
                throw new BadRequestError("username is duplicated");
            }
            throw error
        }
        user.setDataValue("password", undefined)
        return res.json(user)
    }

    loginPage(req, res) {

        if (req.user) {
            return res.redirect("/")
        }
        return res.render("auth/login.ejs",
            {
                title: "Login"
            })
    }

    async login(req, res) {
        if (req.user) {
            return res.redirect("/")
        }
        const { username, password } = req.body

        if (!username || !password) {
            throw new BadRequestError("username and password are required!");
        }

        const user = await User.findOne({ where: { username } })
        if (!user) {
            throw new BadRequestError("credential error");
        }

        if (!bcrypt.compareSync(password, user.password)) {
            throw new BadRequestError("password is wrong");
        }

        user.setDataValue("password", undefined)

        req.session.user = user

        return res.json(user)
    }

    logout(req, res) {
        req.session.destroy((err) => {
            if (!err) {
                return res.redirect(req.headers.referer)
            } else {
                throw new Error(err)
            }
        })

    }
}

export default new AuthController()