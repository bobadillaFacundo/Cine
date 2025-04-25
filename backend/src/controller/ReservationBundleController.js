import router from 'express'
import reservationBundle from '../service/ReservationBundle.js'


export const getReservationBundle = async (req, res) => {
    try {
        const reservationBundleData = await reservationBundle.getReservationBundle()
        res.status(200).json(reservationBundleData)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }

export const getReservationBundleById = async (req, res) => {
    try {
        const reservationBundleData = await reservationBundle.getReservationBundleById(req.params.id)
        if (reservationBundleData) {
            res.status(200).json(reservationBundleData)
        } else {
            res.status(404).json({ message: 'Reservation bundle not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const createReservationBundle = async (req, res) => {
    try {
        const reservationBundleData = await reservationBundle.createReservationBundle(req.body)
        res.status(201).json(reservationBundleData)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateReservationBundle = async (req, res) => {

    try {
        const reservationBundleData = await reservationBundle.updateReservationBundle(req.params.id, req.body)
        if (reservationBundleData) {
            res.status(200).json(reservationBundleData)
        } else {
            res.status(404).json({ message: 'Reservation bundle not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteReservationBundle = async (req, res) => {
    try {
        const reservationBundleData = await reservationBundle.deleteReservationBundle(req.params.id)
        if (reservationBundleData) {
            res.status(200).json({ message: 'Reservation bundle deleted successfully' })
        } else {
            res.status(404).json({ message: 'Reservation bundle not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getReservationBundleByReservationId = async (req, res) => {
    try {
        const reservationBundleData = await reservationBundle.getReservationBundleByReservationId(req.params.reservationId)
        if (reservationBundleData) {
            res.status(200).json(reservationBundleData)
        } else {
            res.status(404).json({ message: 'Reservation bundle not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getReservationBundleByBundleId = async (req, res) => {
    try {
        const reservationBundleData = await reservationBundle.getReservationBundleByBundleId(req.params.bundleId)
        if (reservationBundleData) {
            res.status(200).json(reservationBundleData)
        } else {
            res.status(404).json({ message: 'Reservation bundle not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


