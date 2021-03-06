import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1313'
  // baseURL: 'http://34.208.55.29:1313'
})

export function getSpecies () {
  return api.get('/lists/species/all')
}

export function getAnimals () {
  return api.get('/elements')
}

export function getProjects () {
  return api.get('/projects')
}

export function createProject (data) {
  return api.post('/projects', data)
}
