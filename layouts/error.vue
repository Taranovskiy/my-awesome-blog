<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Error</h1>
      <nuxt-link to="/">Go to main</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
}

.error-title {
  margin-bottom: 1rem;
  color: tomato;
}
</style>
