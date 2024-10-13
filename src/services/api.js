import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // điều chỉnh URL của backend
});

// Hàm để lấy danh sách sinh viên
export const getStudents = () => {
    return api.get('/students');
};

// Hàm để thêm sinh viên
export const addStudent = (student) => {
    return api.post('/students', student);
};

// Hàm để xóa sinh viên
export const deleteStudent = (id) => {
    return api.delete(`/students/${id}`);
};

// Hàm để cập nhật sinh viên
export const updateStudent = (id, student) => {
    return api.put(`/students/${id}`, student);
};

export default {
    getStudents,
    addStudent,
    deleteStudent,
    updateStudent,
};
