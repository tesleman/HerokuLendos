import mongoose from 'mongoose'

const SlidecScema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },

}, {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
})


export const Slide = mongoose.models.Slide || mongoose.model('Slide', SlidecScema)