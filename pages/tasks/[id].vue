<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <nuxt-link to="/">
          <v-btn color="primary" class="mb-5">بازگشت به لیست وظایف</v-btn>
        </nuxt-link>
        <task-card :task="task" />
        <v-row class="mt-3" justify="space-between" no-gutters>
          <v-btn color="success" @click="openMarkAsDoneDialog">علامت گذاری به عنوان انجام شده</v-btn>
          <v-btn color="warning" @click="openTransferDialog">انتقال وظیفه</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="transferDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-center">
          <h3>انتقال وظیفه</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="توضیحات"
            textarea
          ></v-text-field>
          <select-assignee v-model="newAssignee" />
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="transferTask">انتقال</v-btn>
          <v-btn @click="transferDialog = false">لغو</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="markAsDoneDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-center">
          <h3>علامت گذاری به عنوان انجام شده</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="توضیحات"
            textarea
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="markAsDone">انجام</v-btn>
          <v-btn @click="markAsDoneDialog = false">لغو</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/stores/project";
import SelectAssignee from "@/components/SelectAssignee.vue";
import TaskCard from "~/components/TaskCard.vue";

const task = {
  id: 1,
  title: "وظیفه ۱",
  description: "توضیحات وظیفه ۱",
  assignee: 1,
};
const markAsDoneDialog = ref(false);
const transferDialog = ref(false);
const newAssignee = ref(null);

const openMarkAsDoneDialog = () => {
  markAsDoneDialog.value = true;
};

const markAsDone = () => {
  console.log("Task marked as done:", task.value);
};

const openTransferDialog = () => {
  newAssignee.value = null;
  transferDialog.value = true;
};

const transferTask = () => {
  console.log("Task transferred to:", newAssignee.value);
  transferDialog.value = false;
};

onMounted(() => {
  const route = useRoute();
  const projectStore = useProjectStore();
  // task.value = projectStore.getTaskById(route.params.id);
});
</script>

<style>
/* Add any custom styles here if needed */
</style>
