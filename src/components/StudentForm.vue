<template>
    <div class="container mt-5">
        <h2 class="mb-4">Chỉnh sửa Sinh Viên</h2>
        <form @submit.prevent="updateStudent">
            <div class="form-group">
                <label for="name">Tên:</label>
                <input type="text" v-model="student.name" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="student.email" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="course">Khóa học:</label>
                <input type="text" v-model="student.course" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="enrollment_date">Ngày nhập học:</label>
                <input type="date" v-model="student.enrollment_date" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-primary">Cập nhật</button>
            <button type="button" @click="closeEdit" class="btn btn-secondary">Đóng</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const student = ref({
    name: '',
    email: '',
    course: '',
    enrollment_date: ''
});

// Hàm để cập nhật thông tin sinh viên
const updateStudent = () => {
    // Thực hiện các hành động cần thiết khi cập nhật
    console.log('Cập nhật sinh viên:', student.value);
};

// Hàm để đóng form chỉnh sửa
const closeEdit = () => {
    // Đóng form hoặc thực hiện các hành động cần thiết khác
    console.log('Đóng form chỉnh sửa');
};
</script>
