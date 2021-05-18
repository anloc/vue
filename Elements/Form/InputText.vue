<template>
  <div class="form-group">
    <label :for="labelId"><slot></slot> <span v-if="$attrs.required === true">*</span></label>
    <input v-bind="$attrs" type="text"
           class="form-control"
           :id="labelId"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>

import Utils from "../../Mixins/Utils";
import {uuid} from "../../Mixins/Utilsv3";
import {computed} from 'vue';

export default {
  mixins: [
    Utils
  ],
  props: {
    modelValue : {
      require: false
    }
  },
  emits: ['update:modelValue'],
  setup() {
    const labelId = computed(() => "label_" + uuid());

    return {
      labelId
    }
  }
}
</script>
