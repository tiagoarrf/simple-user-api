import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
    async findAll(req: Request, res: Response) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (error) {
            return res.status(500).send({
                error: "Users not found",
                message: error
            })
        }
    }

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        try {
            const userExist = await User.findOne({ email });
            if (userExist) {
                return res.status(400).send({
                    error: "Data persistence error",
                    message: "User already exist"
                })
            }

            const user = await User.create({
                name,
                email,
                password
            });
            return res.json(user);
        } catch (error) {
            return res.status(500).send({
                error: "Registration user failed",
                message: error
            })
        }
    }

    async update(req: Request, res: Response) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((user) => {
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        }).catch((error) => {
            res.status(500).send({
                error: "Edit user failed",
                message: error
            });
        })
    }

    async delete(req: Request, res: Response) {
        User.findByIdAndDelete(req.params.id).then((user) => {
            if (!user) {
                return res.status(404).send({
                    error: "Delete user failed",
                    message: "User not found"
                });
            }
            res.send(user);
        }).catch((error) => {
            res.status(500).send({
                error: "Delete user failed",
                message: error
            });
        })
    }
}

export default new UserController();