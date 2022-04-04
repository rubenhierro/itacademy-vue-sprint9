<script setup>
const year = new Date().getFullYear()
</script>
<template>
  <div class="footer text-center">{{ year }} - El Racó de les Delícies</div>
</template>
<style>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  min-height: 100px;
  margin-top: 20px;
}
</style>