import Vue from 'vue'

Vue.mixin({
  methods: {
    ucfirst: string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
})