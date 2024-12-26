<template>
  <v-app>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <GlobalSnackbar />
  </v-app>
</template>

<script setup>
</script>

<style>
html {
  font-family: 'IRANSans', sans-serif;
  direction: rtl;
}

.v-application {
  font-family: 'IRANSans', sans-serif !important;
}

.v-application [class*='text-'] {
  font-family: 'IRANSans', sans-serif !important;
}

.v-application .headline {
  font-family: 'IRANSans', sans-serif !important;
}

.v-application .title {
  font-family: 'IRANSans', sans-serif !important;
}
</style>
