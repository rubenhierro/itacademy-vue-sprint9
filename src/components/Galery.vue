<template>
  <div class="galery">

    <img src="../assets/apartment-1.jpg" />

    <img src="../assets/apartment-2.jpg" />

    <img src="../assets/apartment-3.jpg" />
  </div>
</template>
<style>
.galery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px
}
.img-sec {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.img-ter {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}
</style>