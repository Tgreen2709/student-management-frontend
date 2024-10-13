<template>
    <div class="student-list">
        <h1>Danh Sách Sinh Viên</h1>

        <div class="search-container">
            <input v-model="searchTerm" placeholder="Tìm kiếm sinh viên..." />
        </div>

        <ul class="student-items">
            <li v-for="student in paginatedStudents" :key="student.id" class="student-item">
                <strong>{{ student.name }}</strong> - {{ student.course }} - {{ student.email }} - Ngày nhập học: {{
                    student.enrollment_date }}
                <button @click="selectStudent(student)" class="btn btn-edit">Chỉnh sửa</button>
                <button @click="deleteStudent(student.id)" class="btn btn-delete">Xóa</button>
            </li>
        </ul>

        <div class="pagination">
            <button @click="currentPage--" :disabled="currentPage === 1">Trước</button>
            <span>Trang {{ currentPage }} / {{ totalPages }}</span>
            <button @click="currentPage++" :disabled="currentPage === totalPages">Sau</button>
        </div>

        <EditStudent v-if="selectedStudent" :selectedStudent="selectedStudent" @close="closeEdit" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import api from '../services/api'; // Đảm bảo đường dẫn chính xác đến file api.js
import EditStudent from './EditStudent.vue';

const students = ref([]);
const searchTerm = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;
const selectedStudent = ref(null);

// Lấy danh sách sinh viên từ API
const fetchStudents = async () => {
    try {
        const response = await api.getStudents();
        students.value = response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sinh viên:', error);
    }
};

// Lọc danh sách sinh viên
const filteredStudents = computed(() => {
    return students.value.filter(student =>
        student.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
});

// Phân trang sinh viên
const paginatedStudents = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredStudents.value.slice(start, end);
});

// Tổng số trang
const totalPages = computed(() => Math.ceil(filteredStudents.value.length / itemsPerPage));

// Chọn sinh viên để chỉnh sửa
const selectStudent = (student) => {
    selectedStudent.value = student;
};

// Đóng component chỉnh sửa
const closeEdit = () => {
    selectedStudent.value = null;
    fetchStudents(); // Cập nhật danh sách sinh viên sau khi chỉnh sửa
};

// Xóa sinh viên
const deleteStudent = async (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
        try {
            await api.deleteStudent(id);
            students.value = students.value.filter(student => student.id !== id);
            alert('Xóa sinh viên thành công');
        } catch (error) {
            console.error('Lỗi khi xóa sinh viên:', error);
            alert('Không thể xóa sinh viên');
        }
    }
};

// Khởi động khi component được tạo
fetchStudents();
</script>

<style scoped>
.student-list {
    margin: 20px 0;
}

.search-container {
    margin-bottom: 20px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
}

.student-items {
    list-style-type: none;
    padding: 0;
}

.student-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-edit {
    background-color: #42b983;
    color: white;
}

.btn-delete {
    background-color: #e74c3c;
    color: white;
}

.btn-edit:hover {
    background-color: #358a62;
}

.btn-delete:hover {
    background-color: #c0392b;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>
