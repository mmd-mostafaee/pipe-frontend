<template>
  <v-autocomplete
    :model-value="modelValue"
    @update:model-value="emitValue"
    :items="members"
    label="مسئول انجام"
    required
    item-title="name"
    item-value="id"
    clearable
  ></v-autocomplete>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useProjectStore } from "@/stores/project";

const props = defineProps({
  modelValue: {
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const projectStore = useProjectStore();
const members = projectStore.members;

const emitValue = (value) => {
  emit("update:modelValue", value ? value: null);
};
</script>
