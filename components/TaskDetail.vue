<template>
  <v-card class="ma-2">
    <v-card-title>{{ task.title }}</v-card-title>
    <v-card-text>
      <p>{{ task.description }}</p>
      <v-chip class="mt-2" color="primary" label>
        <v-icon start icon="mdi-account"></v-icon>
        {{ assignee.name }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { useProjectStore } from '@/stores/project';

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      description: '',
      assignee: null,
    }),
  },
});

const projectStore = useProjectStore();
const members = projectStore.members;
const assignee = members.find((member) => member.id === props.task.assignee);


</script>

<style scoped>
/* Add any component-specific styles here */
</style>
