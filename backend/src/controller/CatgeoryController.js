// import express in variable
import express from 'express'
// import Category from '../models/Category.js'
import Category from '../models/Category.js'


export const createCategory = async (req, res) => {
  const { name } = req.body
  try {
    const category = await Category.create({ name })
    res.status(201).json(category)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }

export const getCategory = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findById(id)
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}	

export const updateCategory = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        const category = await Category.findByIdAnd
Update(id,  {name}, { new: true })
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        }
        res.status(200).json(category)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getCategoryByName = async (req, res) => {
    const { name } = req.params
    try {
        const category = await Category.findOne({ name })
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        }
        res.status(200).json(category)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategoryById = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findById(id)
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteCategoryById = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findByIdAndDelete(id)
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        }
        res.status(200).json({ message: 'Category deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
