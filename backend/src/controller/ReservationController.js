import router from 'express'
import reservation from '../service/Reservation.js'


export const getAllReservations = async (req, res) => {
    try {
        const reservations = await reservation.getAllReservations()
        res.status(200).json(reservations)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getReservationById = async (req, res) => {
    try {
        const reservation = await reservation.getReservationById(req.params.id)
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' })
        }
        res.status(200).json(reservation)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createReservation = async (req, res) => {
    try {
        const newReservation = await reservation.createReservation(req.body)
        res.status(201).json(newReservation)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateReservation = async (req, res) => {
    try {
        const updatedReservation = await reservation.updateReservation(req.params.id, req.body)
        if (!updatedReservation) {
            return res.status(404).json({ message: 'Reservation not found' })
        }
        res.status(200).json(updatedReservation)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteReservation = async (req, res) => {
    try {
        const deletedReservation = await reservation.deleteReservation(req.params.id)
        if (!deletedReservation) {
            return res.status(404).json({ message: 'Reservation not found' })
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getReservationsByUserId = async (req, res) => {
    try {
        const reservations = await reservation.getReservationsByUserId(req.params.userId)
        res.status(200).json(reservations)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


