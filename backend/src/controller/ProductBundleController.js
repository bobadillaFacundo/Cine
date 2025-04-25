import router from 'express'
import ProductBundle from '../models/ProductBundle.js'




export const getProductBundles = async (req, res) => {
  try {
    const productBundles = await ProductBundle.find()
    res.status(200).json(productBundles)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductBundleById = async (req, res) => {
    try {
        const productBundle = await ProductBundle.findById(req.params.id)
        if (!productBundle) {
        return res.status(404).json({ message: 'Product bundle not found' })
        }
        res.status(200).json(productBundle)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }

export const createProductBundle = async (req, res) => {
    const productBundle = new ProductBundle(req.body)
    try {
        const savedProductBundle = await productBundle.save()
        res.status(201).json(savedProductBundle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    }


export const updateProductBundle = async (req, res) => {
    try {
        const productBundle = await ProductBundle.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!productBundle) {
            return res.status(404).json({ message: 'Product bundle not found' })
        }
        res.status(200).json(productBundle)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const deleteProductBundle = async (req, res) => {
    try {
        const productBundle = await ProductBundle.findByIdAndDelete(req.params.id)
        if (!productBundle) {
            return res.status(404).json({ message: 'Product bundle not found' })
        }
        res.status(204).json()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProductBundlesByCategory = async (req, res) => {
    try {
        const productBundles = await ProductBundle.find({ category: req.params.category })
        res.status(200).json(productBundles)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProductBundlesByPriceRange = async (req, res) => {
    try {
        const { min, max } = req.query
        const productBundles = await ProductBundle.find({ price: { $gte: min, $lte: max } })
        res.status(200).json(productBundles)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getProductBundlesByName = async (req, res) => {
    try {
        const productBundles = await ProductBundle.find({ name: { $regex: req.params.name, $options: 'i' } })
        res.status(200).json(productBundles)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


