<template>
  <div v-if="list.length">
    <div class="card" style="width: 30rem;">
      <div class="card-header fs-3">{{ name }}</div>
      <ul lass="list-group list-group-flush">
        <li class="list-group-item flex-row-reverse" v-for="(item, key) of list" :key="key">
          <div>
            <span v-for="property of properties">
              <strong>{{ (property.display) }}:</strong>
              {{
                property.type === 'date'
                  ? new Date(Date.parse(item[property.value])).toLocaleDateString()
                  : item[property.value]
              }}
              <br />
            </span>
          </div>

          <div class="text-end">
            <a
              v-if="buttons.confirm"
              href="#"
              class="btn btn-success"
              @click="$emit('confirm', key)"
            >
              Aprobar
            </a>
            <a v-if="buttons.edit" href="#" class="btn btn-primary" @click="$emit('edit', key)">
              <i class="fa-regular fa-pen-to-square"></i>
            </a>
            <a v-if="buttons.delete" href="#" class="btn btn-danger" @click="$emit('delete', key)">
              <i class="fa-regular fa-trash-can"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['name', 'list', 'properties', 'buttons'])
const emits = defineEmits(['edit', 'delete'])
</script>