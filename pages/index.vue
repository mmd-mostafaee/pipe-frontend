<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="text-h4 mb-4 text--center">لیست وظایف</h1>
        <router-link to="/tasks/create">
          <v-btn color="primary" class="mb-4">ایجاد وظیفه جدید</v-btn>
        </router-link>

        <v-row>
          <v-col cols="12" v-for="task in tasks" :key="task.id">
            <nuxt-link :to="`/tasks/${task.id}`" class="no-underline">
              <TaskCard :task="task" />
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import TaskCard from "@/components/TaskCard.vue";

const tasks = ref([
  { id: 1, title: "وظیفه ۱", description: "توضیحات وظیفه ۱", assignee: 1 },
  { id: 2, title: "وظیفه ۲", description: "توضیحات وظیفه ۲", assignee: 2 },
  { id: 3, title: "وظیفه ۳", description: "توضیحات وظیفه ۳", assignee: 1 },
]);
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
