<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';

export default {
  components: {
    Calendar, DatePicker
  },
  data() {
    return {
      date: new Date(), //input
      dragValue: null,
      range: {
        start: null,
        end: null,
      },
    };
  },
  computed: {
    selectDragAttribute() {
      return {
        popover: {
          visibility: 'hover',
          isInteractive: false, // Defaults to true when using slot
        },
      };
    },
  },
  methods: {
    console() {
      console.log(this.range);
      console.log(this.date);

    }
  }
};
</script>

<template>
  <DatePicker
    v-model="range"
    :columns="2"
    :select-attribute="selectDragAttribute"
    :drag-attribute="selectDragAttribute"
    is-range
    @drag="dragValue = $event"
    :disabled-dates="[
      {
        start: null,
        end: new Date(),
      },
    ]"
  >
    <template v-slot:day-popover="{ format }">
      <div>
        {{ format(dragValue ? dragValue.start : range.start, 'MMM D') }}
        -
        {{ format(dragValue ? dragValue.end : range.end, 'MMM D') }}
      </div>
    </template>
  </DatePicker>
  <br />
  <br />

  <DatePicker class="inline-block h-full" v-model="date">
    <template v-slot="{ inputValue, togglePopover }">
      <!-- <div class="flex items-center">
        <button
          class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
          @click="togglePopover()"
        >select</button>
        <input
          :value="inputValue"
          class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
          readonly
        />
      </div>-->

      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          @click="togglePopover()"
        ><i class="fa-regular fa-calendar-check"></i></button>
        <input
          :value="inputValue"
          type="text"
          class="form-control"
          placeholder
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </template>
  </DatePicker>

  <br />
  <br />
  <button @click="console">vore</button>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
