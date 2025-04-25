import router from 'express'
import room from '../models/Room.js'




export const getAllRooms = async (req, res) => {
    try {
        const rooms = await room.find()
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getRoomById = async (req, res) => {
    try {
        const roomId = req.params.id
        const roomData = await room.findById(roomId)
        if (!roomData) {
            return res.status(404).json({ message: 'Room not found' })
        }
        res.status(200).json(roomData)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createRoom = async (req, res) => {
    try {
        const newRoom = new room(req.body)
        await newRoom.save()
        res.status(201).json(newRoom)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateRoom = async (req, res) => {
    try {
        const roomId = req.params.id
        const updatedRoom = await room.findByIdAndUpdate
(roomId, req.body, { new: true })   
        if (!updatedRoom) {
            return res.status(404).json({ message: 'Room not found' })
        }
        res.status(200).json(updatedRoom)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const roomId = req.params.id
        const deletedRoom = await room.findByIdAndDelete(roomId)
        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' })
        }
        res.status(200).json({ message: 'Room deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getRoomByName = async (req, res) => {
    try {
        const roomName = req.params.name
        const roomData = await room.findOne({ name: roomName })
        if (!roomData) {
            return res.status(404).json({ message: 'Room not found' })
        }
        res.status(200).json(roomData)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




