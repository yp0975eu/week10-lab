import axios from 'axios'

const baseUrl = '/api/students'

function getAllStudents() {
  return axios.request(baseUrl).then(res => res.data)
}

function addStudent(student) {
  return axios.post(baseUrl, student).then(res => res.data)
}

function updateStudent(student) {
  return axios.patch(`${baseUrl}/${student.id}`, student).then(res => res.data)
}

function deleteStudent(student) {
  return axios.delete(`${baseUrl}/${student.id}`, student).then(res => res.data)
}

export default {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent
}