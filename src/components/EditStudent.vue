<template>
    <div class="edit-student">
        <h2>Chỉnh Sửa Thông Tin Sinh Viên</h2>
        <form @submit.prevent="updateStudent">
            <div>
                <label for="name">Tên:</label>
                <input v-model="student.name" id="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input v-model="student.email" id="email" type="email" required />
            </div>
            <div>
                <label for="course">Khóa học:</label>
                <input v-model="student.course" id="course" required />
            </div>
            <div>
                <label for="enrollment_date">Ngày nhập học:</label>
                <input v-model="student.enrollment_date" id="enrollment_date" type="date" required />
            </div>
            <button type="submit">Cập nhật</button>
            <button type="button" @click="close">Hủy</button>
        </form>
    </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'; // Khai báo defineEmits
import api from '../services/api'; // Đảm bảo đường dẫn đúng

const props = defineProps({
    selectedStudent: Object,
});

const emit = defineEmits(['close']); // Khai báo emit

const student = ref({ ...props.selectedStudent });

const updateStudent = async () => {
    try {
        await api.updateStudent(student.value);
        alert('Cập nhật sinh viên thành công!');
        emit('close'); // Đóng component sau khi cập nhật thành công
    } catch (error) {
        console.error('Lỗi khi cập nhật sinh viên:', error);
        alert('Không thể cập nhật sinh viên');
    }
};

const close = () => {
    emit('close'); // Đóng component
};
</script>

<style scoped>
.edit-student {
    margin-top: 20px;
}
</style>
