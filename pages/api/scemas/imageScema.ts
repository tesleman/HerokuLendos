import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
    name: { type: String, },
    imageFormst: { type: String, },
    image: { type: Buffer }
}, {
    timestamps: true
})


export const Image = mongoose.models.Image || mongoose.model('Image', ImageSchema)