import router from 'express'
import show from '../models/Show.js'




export const getAllShows = async (req, res) => {
    try {
        const shows = await show.find()
        res.status(200).json(shows)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }
export const getShowById = async (req, res) => {
    try {
        const showId = req.params.id
        const showDetails = await show.findById(showId)
        if (!showDetails) {
            return res.status(404).json({ message: 'Show not found' })
        }
        res.status(200).json(showDetails)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createShow = async (req, res) => {
    try {
        const newShow = new show(req.body)
        await newShow.save()
        res.status(201).json(newShow)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const updateShow = async (req, res) => {
    try {
        const showId = req.params.id
        const updatedShow = await show.findByIdAndUpdate
(showId, req.body, { new: true })
        if (!updatedShow) {
            return res.status(404).json({ message: 'Show not found' })
        }
        res.status(200).json(updatedShow)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteShow = async (req, res) => {
    try {
        const showId = req.params.id
        const deletedShow = await show.findByIdAndDelete(showId)
        if (!deletedShow) {
            return res.status(404).json({ message: 'Show not found' })
        }
        res.status(200).json({ message: 'Show deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
