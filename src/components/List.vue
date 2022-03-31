<template>
  <div>
    <div class="card" style="width: 30rem;">
      <div class="card-header fs-3">{{ name }}</div>
      <ul lass="list-group list-group-flush">
        <li class="list-group-item flex-row-reverse" v-for="(item, key) of list" :key="key">
          <div>
            <span v-for="property of properties">
             <strong>{{ (property.display) }}:</strong> {{ item[property.value] }}
              <br />
            </span>
          </div>

          <div class="text-end">
            <a href="#" class="btn btn-primary" @click="$emit('edit', key)">
              <i class="fa-regular fa-pen-to-square"></i>
            </a>
            <a href="#" class="btn btn-danger" @click="$emit('delete', key)">
              <i class="fa-regular fa-trash-can"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['name', 'list', 'properties'])
const emits = defineEmits(['edit', 'delete'])
</script>