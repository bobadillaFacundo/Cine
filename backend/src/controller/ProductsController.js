import router from 'express'
import  Product  from '../models/Product.js'



export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json(product)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category })
        if (!products) return res.status(404).json({ message: 'Products not found' })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getProductsBySearch = async (req, res) => {
    const { searchQuery } = req.query
    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } }
            ]
        })
        if (!products) return res.status(404).json({ message: 'Products not found' })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProductsByPrice = async (req, res) => {
    const { min, max } = req.query
    try {
        const products = await Product.find({ price: { $gte: min, $lte: max } })
        if (!products) return res.status(404).json({ message: 'Products not found' })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

