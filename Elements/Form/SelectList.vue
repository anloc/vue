<template>
  <div class="form-group">
    <label><slot></slot> <span v-if="$attrs.required === true">*</span></label>
    <select @change="$emit('update:modelValue', $event.target.value)" class="custom-select rounded-0">
      <option></option>
      <option :selected="modelValue === item['@id']" v-for="item in list" :value="item['@id']">{{ item[nameCode] }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    list: {
      type: Array,
      required: true,
    },
    nameCode: {
      type: String,
      default: 'name',
      required: false,
    }
  },
  emits: ['update:modelValue']
}
</script>
