<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.prevent.native="onSubmit"
  >
    <h1 class="mb">Создать новый пост</h1>
    <el-form-item label="Название поста" prop="title">
      <el-input v-model.trim="controls.title" />
    </el-form-item>

    <el-form-item label="Текст в формате .md или .html" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">
        Создать пост
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['adminAuth'],
  data() {
    return {
      loading: false,
      controls: {
        text: '',
        title: '',
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Поле не должно быть пустым',
            trigger: 'blur',
          },
        ],
        title: [
          {
            required: true,
            message: 'Поле не должно быть пустым',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
          };

          try {
            await this.$store.dispatch('post/create', formData);
            this.controls.title = '';
            this.controls.text = '';
            this.$message.success('Пост создан');
          } catch (error) {
          } finally {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
