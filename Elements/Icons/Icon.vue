<template>
  <i v-bind="$attrs">
    <svg :width="iconSize" :height="iconSize" :fill="iconColor">
      <use :xlink:href="iconHref"/>
    </svg>
  </i>
</template>

<script>

import {isEmpty} from "../Mixins/Utils";
import {computed} from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
    },
    color: {
      type: String,
      required: false,
    }
  },
  setup(props) {
    const iconHref = computed(() => "/assets/images/bootstrap-icons.svg#" + props.name);
    const iconSize = computed(() => !isEmpty(props.size) ? props.size : 24);
    const iconColor = computed(() => !isEmpty(props.color) ? props.color : 'currentColor');

    return {
      iconHref,
      iconSize,
      iconColor
    }
  }
}
</script>
