import router from 'express'
import Movie from '../models/Movie.js'





export const createMovie = async (req, res) => {
  const { title, description, releaseDate, genre, director } = req.body
  try {
    const movie = await Movie.create({ title, description, releaseDate, genre, director })
    res.status(201).json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getMovie = async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findById(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }   
    res.status(200).json(movie)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
        }
}

export const updateMovie = async (req, res) => {
  const { id } = req.params
  const { title, description, releaseDate, genre, director } = req.body
  try {
    const movie = await Movie.findByIdAndUpdate(id, { title, description, releaseDate, genre, director }, { new: true })
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteMovie = async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findByIdAndDelete(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(204).json()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getMovieByTitle = async (req, res) => {
  const { title } = req.params
  try {
    const movie = await Movie.findOne({ title })
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(200).json(movie)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
        }
}
export const getMovieByGenre = async (req, res) => {
  const { genre } = req.params
  try {
    const movies = await Movie.find({ genre })
    if (!movies.length) {
      return res.status(404).json({ message: 'No movies found for this genre' })
    }
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getMovieByDirector = async (req, res) => {
  const { director } = req.params
  try {
    const movies = await Movie.find({ director })
    if (!movies.length) {
      return res.status(404).json({ message: 'No movies found for this director' })
    }
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

