import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../core/db";
import { Image } from "../scemas/imageScema";
import mongoose from 'mongoose'


mongoose.Promise = global.Promise;

dbConnect()
export default async function (req: NextApiRequest, res: NextApiResponse) {

    const { method } = req



    switch (method) {
        case "GET":
            try {
                const img = await Image.find({}).exec()
                res.status(200).json({
                    message: 'succes',
                    data: img
                })
                mongoose.disconnect()
            } catch (e) {
                res.status(400).json({
                    success: 'err',
                    data: e
                })
            }
            break

        case "POST":
            try {

                const bindata = req.body.toString('base64')
                console.log(bindata.substr(0, 200));

                let burger = Buffer.from(bindata, 'base64');
                let imageFormst = bindata.split(",")[0].toString()
                console.log(burger);
                let ss = await Image.create({ "name": Math.random().toString(), "imageFormst": imageFormst, "image": burger })
                let dd = await Image.find(ss.name)
                console.log(ss)
                console.log(dd)
                mongoose.disconnect()
                res.status(200).json({
                    success: true,
                    data: ss
                })

            } catch (e) {
                res.json({
                    success: false, data: e
                })
            }
            break
    }

}
