<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://media.globalchampionstour.com/cache/750x429/assets/berlin.jpg"
        alt="post-image"
        class="post-image"
      />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-message">12</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {},
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-image {
  width: 100%;
  height: auto;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
</style>
