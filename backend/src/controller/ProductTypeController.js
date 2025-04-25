import router from 'express'
import productType from '../service/ProductType.js'


export const getProductTypes = async (req, res) => {
    try {
        const productTypes = await productType.find()
        res.status(200).json(productTypes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProductTypeById = async (req, res) => {
    try {
        const productType = await productType.findById(req.params.id)
        if (!productType) return res.status(404).json({ message: 'Product type not found' })
        res.status(200).json(productType)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createProductType = async (req, res) => {
    const productType = new productType(req.body)
    try {
        const newProductType = await productType.save()
        res.status(201).json(newProductType)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const updateProductType = async (req, res) => {
    try {
        const productType = await productType.findByIdAndUpdate(req.params
.id, req.body, { new: true })
        if (!productType) return res.status(404).json({ message: 'Product type not found' })
        res.status(200).json(productType)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteProductType = async (req, res) => {
    try {
        const productType = await productType.findByIdAndDelete(req.params.id)
        if (!productType) return res.status(404).json({ message: 'Product type not found' })
        res.status(200).json({ message: 'Product type deleted successfully' })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProductTypesBySearch = async (req, res) => {
    try {
        const { searchQuery } = req.query
        const productTypes = await productType.find({
            name: { $regex: searchQuery, $options: 'i' }
        })
        if (!productTypes) return res.status(404).json({ message: 'Product types not found' })
        res.status(200).json(productTypes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

