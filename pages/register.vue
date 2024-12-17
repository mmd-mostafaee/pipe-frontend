<template>
  <v-card class="mx-auto mt-5" max-width="400">
    <v-card-title class="text-center">ثبت نام</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="register">
        <v-text-field
          v-model="name"
          label="نام"
          required
          prepend-icon="mdi-account"
        ></v-text-field>

        <v-text-field
          v-model="username"
          label="نام کاربری"
          required
          prepend-icon="mdi-account-circle"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="رمز عبور"
          type="password"
          required
          prepend-icon="mdi-lock"
        ></v-text-field>

        <v-btn
          type="submit"
          color="primary"
          block
          class="mt-2"
        >
          ثبت نام
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        to="/login"
        block
      >
        قبلاً ثبت نام کرده‌اید؟ وارد شوید
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const username = ref('')
const password = ref('')

const register = () => {
  // Implement registration logic here
  // console.log('Registration attempt', { name: name.value, username: username.value, password: password.value })
}
</script>
