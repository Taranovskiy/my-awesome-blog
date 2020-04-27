<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://media.globalchampionstour.com/cache/750x429/assets/berlin.jpg"
          alt="post-image"
        />
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime,
        alias consequatur asperiores molestiae quia ipsam, tempora sequi
        repudiandae eveniet nihil cum nam, inventore fuga fugiat? Iure
        dignissimos eius aspernatur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime,
        alias consequatur asperiores molestiae quia ipsam, tempora sequi
        repudiandae eveniet nihil cum nam, inventore fuga fugiat? Iure
        dignissimos eius aspernatur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime,
        alias consequatur asperiores molestiae quia ipsam, tempora sequi
        repudiandae eveniet nihil cum nam, inventore fuga fugiat? Iure
        dignissimos eius aspernatur?
      </p>
    </main>
    <footer>
      <!-- Form -->

      <div v-if="true" class="comments">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div v-else class="text-center">Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment';
export default {
  components: { AppComment },
  validate({ params }) {
    return Boolean(params.id);
  },
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-content {
  margin-bottom: 2rem;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.post-image img {
  width: 100%;
  height: auto;
}
</style>
