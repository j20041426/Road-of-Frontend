<template>
  <div class="bg">
    <div class="header">

    </div>
    <div class="main">
      <div class="title">
        <div class="week">星期三</div>
        <div class="date">7月28日</div>
      </div>
      <div class="icon">
        <i class="iconfont icon-qing"></i>
      </div>
      <div class="weather">
        <div class="tempreture"><span>23°</span>/10°</div>
        <div class="weather">晴</div>
      </div>
      <div class="sep"></div>
      <div class="humidity"><i class="iconfont icon-lab-yudi"></i>90%</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.bg {
  width: 100%;
  min-height: 100%;
  background-color: #333333;
}
.header {
  width: 100%;
  height: 5rem;
}
.main {
  color: #555555;
  width: 90%;
  margin-left: 5%;
  background-color: #e5c852;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
}
.main .title {
  display: flex;
  justify-content: space-between;
}
.main .title .week {
  color: #fff;
  font-size: 2rem;
}
.main .title .date {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}
.main .icon {
  flex: 1 auto;
  text-align: center;
}
.main .icon i {
  font-size: 10rem;
  color: #fff;
}
.main .weather {
  display: flex;
  justify-content: space-between; 
  align-items: baseline;
}
.main .weather .tempreture {
  font-size: 1rem;
}
.main .weather .tempreture span {
  font-size: 1.8rem;
  color: #303030;
}
.main .sep {
  width: 100%;
  height: 0.2rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border-radius: 0.1rem;
}
.main .humidity i {
  font-size: 1.2rem;
  margin-right: 0.3rem;
}
</style>
