<template>
  <v-card class="mx-auto mt-5" max-width="400">
    <v-card-title class="text-center">ثبت نام</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="register">
        <v-text-field v-model="firstName" label="نام" required prepend-icon="mdi-account"></v-text-field>
        <v-text-field v-model="lastName" label="نام خانوادگی" required prepend-icon="mdi-account"></v-text-field>

        <v-text-field v-model="username" label="نام کاربری" required prepend-icon="mdi-account-circle"></v-text-field>

        <v-text-field
          v-model="password"
          label="رمز عبور"
          type="password"
          required
          prepend-icon="mdi-lock"
        ></v-text-field>

        <v-btn type="submit" color="primary" block class="mt-2">ثبت نام</v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" to="/login" block>قبلاً ثبت نام کرده‌اید؟ وارد شوید</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useApi } from "@/composables/useApi";

const firstName = ref("");
const lastName = ref("");
const username = ref("");
const password = ref("");

const api = useApi();

const register = async () => {
  try {
    const data = await api.fetchApi("api/users/", {
      method: "post",
      body: {
        first_name: firstName.value,
        last_name: lastName.value,
        username: username.value,
        password: password.value,
      },
      showSuccess: true,
      successMessage: "ثبت نام با موفقیت انجام شد"
    });
    
    // Navigate to login after successful registration
    navigateTo('/login');
  } catch (error) {
    // Error is already handled by the API composable
  }
};
</script>
