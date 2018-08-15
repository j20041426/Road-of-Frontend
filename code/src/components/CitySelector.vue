<template>
  <div class="container">
    <div>
      <div v-for="v in provinces" v-key="v">{{v}}</div>
    </div>
    <div>
      <div v-for="v in cities" v-key="v">{{v}}</div>
    </div>
  </div>
</template>

<script>
import pc from '../../static/pc.json'

export default {
  data () {
    return {
      show: false,
      provinces: [],
      cities: []
    }
  },
  created() {
    this.provinces = Object.keys(pc);
    this.cities = pc[this.provinces[0]];
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: flex;
}
</style>
