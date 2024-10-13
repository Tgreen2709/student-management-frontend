<template>
  <div class="form-container">
    <h2>Thêm Sinh Viên Mới</h2>
    <form @submit.prevent="addStudent">
      <div class="form-group">
        <label for="name">Tên:</label>
        <input v-model="student.name" id="name" placeholder="Tên" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="student.email" id="email" placeholder="Email" type="email" required />
      </div>
      <div class="form-group">
        <label for="course">Khóa học:</label>
        <input v-model="student.course" id="course" placeholder="Khóa học" required />
      </div>
      <div class="form-group">
        <label for="enrollment_date">Ngày Nhập Học:</label>
        <input v-model="student.enrollment_date" id="enrollment_date" type="date" required />
      </div>
      <button type="submit" class="btn btn-primary">Thêm Sinh Viên</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import api from "../services/api";

const student = reactive({
  name: "",
  email: "",
  course: "",
  enrollment_date: "",
});

const addStudent = async () => {
  try {
    await api.addStudent(student);
    alert("Thêm sinh viên thành công");
    // Reset form sau khi thêm thành công
    student.name = "";
    student.email = "";
    student.course = "";
    student.enrollment_date = "";
  } catch (error) {
    console.error("Lỗi khi thêm sinh viên:", error);
    alert("Không thể thêm sinh viên");
  }
};
</script>

<style scoped>
.form-container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

h2 {
  color: #2c3e50;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #358a62;
}
</style>
