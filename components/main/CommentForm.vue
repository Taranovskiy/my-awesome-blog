<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.prevent.native="onSubmit"
  >
    <h1>Добавить комментарий</h1>
    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>

    <el-form-item label="Текст комментария" prop="text">
      <el-input
        v-model="controls.text"
        :rows="2"
        resize="none"
        type="textarea"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">
        Добвить комментарий
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Имя не должно быть пустым',
            trigger: 'blur',
          },
        ],
        text: [
          {
            required: true,
            message: 'Введите ваш комментарий',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: '',
          };

          try {
            setTimeout(() => {
              this.$message.success('Комментарий добавлен');
              this.$emit('created');
              // eslint-disable-next-line no-console
              console.log('formData -->', formData);
            }, 2000);
          } catch (error) {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
