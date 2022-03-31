<template>
  <div>
    <div class="card" style="width: 30rem;">
      <div class="card-header fs-3">{{ name }}</div>
      <ul lass="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, key) of list" :key="key">
          {{ item.name }}
          <a href="#" class="btn btn-primary" @click="$emit('edit', key)">
            <i class="fa-regular fa-pen-to-square"></i>
          </a>
          <a href="#" class="btn btn-danger" @click="$emit('delete', key)">
            <i class="fa-regular fa-trash-can"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['name', 'list'])
const emits = defineEmits(['edit', 'delete'])
</script>