<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <nuxt-link to="/">
          <v-btn color="primary" class="mb-5">بازگشت به لیست وظایف</v-btn>
        </nuxt-link>

        <v-card class="mt-5">
          <v-card-title class="text-center">
            <h1>ایجاد وظیفه جدید</h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="createTask">
              <v-text-field v-model="task.title" label="عنوان" required></v-text-field>
              <v-textarea v-model="task.description" label="توضیحات" required></v-textarea>
              <select-assignee v-model="task.assignee" />
              <v-btn type="submit" color="primary" block class="mt-4">ایجاد وظیفه</v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useProjectStore } from "@/stores/project";
import SelectAssignee from "@/components/SelectAssignee.vue";

const props = defineProps({
  task: {
    type: Object,
    default: () => ({
      title: "",
      description: "",
      assignee: null,
    }),
  },
});

const task = ref(props.task);

const projectStore = useProjectStore();

const createTask = () => {
  // Here you would typically send the task data to your backend
  console.log("Task created:", task.value);
  // Reset the form after submission
  task.value = { title: "", description: "", assignee: "" };
};
</script>

<style>
/* Add any custom styles here if needed */
</style>
