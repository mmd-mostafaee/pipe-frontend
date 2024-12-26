<!-- GlobalSnackbar.vue -->
<template>
  asdf
  <v-snackbar :value="true" color="red" timeout="5000" location="top" rounded="pill">
    {{ api.snackbar.text }}

    <template v-slot:actions>
      <!-- <v-btn variant="text" icon="mdi-close" @click="api.snackbar.show = false" /> -->
    </template>
  </v-snackbar>
</template>

<script setup>
const api = useApi();
watch(
  () => api.snackbar.value,
  () => {
    console.log(api.snackbar.value);
  }
);

onNuxtReady(() => {
  // setInterval(() => {
  //   console.log(api.snackbar.value);
  // }, 3000);
});
</script>
