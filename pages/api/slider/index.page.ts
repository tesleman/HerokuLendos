import { Slide } from "../scemas/carouselScema"
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../core/db"


dbConnect()

export default async function (req: NextApiRequest, res: NextApiResponse) {

    const { method, body } = req

    switch (method) {
        case "GET":
            try {
                const slides = await Slide.find({}).exec()
                res.status(200).json({
                    message: 'succes',
                    data: slides
                })
            } catch (errr) {
            
                res.status(400).json({
                    message: 'err',
                    data: errr
                })
            }
            break

        case "POST": {
            try {
                const slide = await Slide.create(body)
                res.status(200).json({
                    message: 'succes',
                    data: slide
                })
            } catch (e) {
                res.status(400).json({
                    message: e
                })
            }
        }

            break
    }

}