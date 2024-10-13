<template>
  <div class="app-container">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Quản Lý Sinh Viên</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Danh Sách Sinh Viên</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add">Thêm Sinh Viên</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Tiêu đề -->
    <h1 class="app-title">Quản Lý Sinh Viên</h1>

    <!-- Router View -->
    <router-view />
  </div>
</template>

<script setup>
// Không cần thay đổi gì ở đây
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.app-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

#app {
  text-align: center;
}
</style>
