import router from 'express'
import bundleProduct from '../service/BundleProduct.js'



export const getBundleProduct = async (req, res) => {
    try {
        const bundleProducts = await bundleProduct.getBundleProduct()
        res.status(200).json(bundleProducts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBundleProductById = async (req, res) => {
    try {
        const bundleProductId = req.params.id
        const bundleProductById = await bundleProduct.getBundleProductById(bundleProductId)
        if (bundleProductById) {
            res.status(200).json(bundleProductById)
        } else {
            res.status(404).json({ message: 'Bundle product not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createBundleProduct = async (req, res) => {
    try {
        const bundleProductData = req.body
        const newBundleProduct = await bundleProduct.createBundleProduct(bundleProductData)
        res.status(201).json(newBundleProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateBundleProduct = async (req, res) => {
    try {
        const bundleProductId = req.params.id
        const bundleProductData = req.body
        const updatedBundleProduct = await bundleProduct.updateBundleProduct(bundleProductId, bundleProductData)
        if (updatedBundleProduct) {
            res.status(200).json(updatedBundleProduct)
        } else {
            res.status(404).json({ message: 'Bundle product not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteBundleProduct = async (req, res) => {
    try {
        const bundleProductId = req.params.id
        const deletedBundleProduct = await bundleProduct.deleteBundleProduct(bundleProductId)
        if (deletedBundleProduct) {
            res.status(200).json({ message: 'Bundle product deleted successfully' })
        } else {
            res.status(404).json({ message: 'Bundle product not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBundleProductByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId
        const bundleProducts = await bundleProduct.getBundleProductByCategory(categoryId)
        res.status(200).json(bundleProducts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

