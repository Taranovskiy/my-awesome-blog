<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.prevent.native="onSubmit"
  >
    <h1 class="mb">Создать пользователя</h1>
    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>

    <el-form-item label="Пароль" prop="password">
      <el-input v-model.trim="controls.password" type="password" />
    </el-form-item>
    <div class="mb-2">
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">
          Создать
        </el-button>
      </el-form-item>
    </div>
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
        login: '',
        password: '',
      },
      rules: {
        login: [
          {
            required: true,
            message: 'Введите логин',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur',
          },
          {
            min: 6,
            message: 'Пароль должен содержать не менее 6 символов',
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
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password,
            };
            await this.$store.dispatch('auth/createUser', formData);
            this.$message.success('Новый пользователь добавлен');
            this.controls.login = '';
            this.controls.password = '';
            this.loading = false;
          } catch (error) {
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
  width: 300px;
}
</style>
