<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.prevent.native="onSubmit"
    >
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-right: 10px">
            {{ post.date | date }}
          </span>
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['adminAuth'],
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id);
    return { post };
  },
  data() {
    return {
      loading: false,
      controls: {
        text: '',
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Поле не должно быть пустым',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {
    this.controls.text = this.post.text;
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            text: this.controls.text,
            id: this.post._id,
          };

          try {
            await this.$store.dispatch('post/update', formData);
            this.$message.success('Пост обновлён');
            this.loading = false;
          } catch (error) {
            this.loading = false;
          }
        }
      });
    },
  },
  head() {
    return {
      title: `Пост | ${this.post.title}`,
    };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
};
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 600px;
}
</style>
