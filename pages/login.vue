<template>
  <v-card class="mx-auto mt-5" max-width="400">
    <v-card-title class="text-center">ورود</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" label="نام کاربری" required prepend-icon="mdi-account"></v-text-field>

        <v-text-field
          v-model="password"
          label="رمز عبور"
          type="password"
          required
          prepend-icon="mdi-lock"
        ></v-text-field>

        <v-btn type="submit" color="primary" block class="mt-2">ورود</v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" to="/register" block>ثبت نام نکرده‌اید؟ اینجا کلیک کنید</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useApi } from "@/composables/useApi";

const username = ref("");
const password = ref("");
const api = useApi();

const login = async () => {
  try {
    const data = await api.fetchApi("api/login/", {
      method: "post",
      body: {
        username: username.value,
        password: password.value,
      },
      showSuccess: true,
      successMessage: "خوش آمدید"
    });

    
    // Navigate to home after successful login
    navigateTo('/');
  } catch (error) {
    // Error is already handled by the API composable
  }
};
</script>
