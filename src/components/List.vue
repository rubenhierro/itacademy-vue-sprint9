<script setup>
const props = defineProps(['name', 'list', 'properties', 'buttons'])
const emits = defineEmits(['edit', 'delete', 'confirm', 'refuse'])
</script>
<template>
  <div v-if="list.length">
    <div class="card" style="width: 30rem;">
      <div class="card-header fs-3">{{ name }}</div>
      <ul lass="list-group list-group-flush">
        <li class="list-group-item flex-row-reverse" v-for="(item, key) of list" :key="key">
          <span
            v-if="item.hasOwnProperty('isAproved')"
            :class="{
              aproved: item.isAproved === true,
              pending: item.isAproved === null,
              refused: item.isAproved === false,
            }"
          >
            <strong>Estado:</strong>
            {{
              item.isAproved === null
                ? "Pendiente"
                : item.isAproved === true
                  ? "Aprobada"
                  : "Rechazada"
            }}
          </span>
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
              v-if="buttons.confirm && item.isAproved === null"
              href="#"
              class="btn btn-success"
              @click="$emit('confirm', key, item.id)"
            >Confirmar</a>
            <a
              v-if="buttons.confirm && item.isAproved === null"
              href="#"
              class="btn btn-danger"
              @click="$emit('refuse', key, item.id)"
            >Rechazar</a>
            <a
              v-if="buttons.edit"
              href="#"
              class="btn btn-primary"
              @click="$emit('edit', key, item.id)"
            >
              <i class="fa-regular fa-pen-to-square"></i> Editar
            </a>
            <a
              v-if="buttons.delete && item.isAproved !== null"
              href="#"
              class="btn btn-danger"
              @click="$emit('delete', key, item.id)"
            >
              <i class="fa-regular fa-trash-can"></i> Borrar
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-else>
    <p class="text-danger fs-3">No hay elementos que mostrar</p>
  </div>
</template>
<style>
.isNotVisible {
  display: none;
}
.aproved {
  background-color: lightgreen;
}
.pending {
  background-color: lightpink;
}
.refused {
  background-color: orange;
}
</style>