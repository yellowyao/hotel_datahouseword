<template>
  <div id="index">
    <h1>欢迎来到上电力国际连锁大酒店</h1>
    <span>----by耀制作</span>
    <button class="but" @click="toDetail()">进入</button>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    toDetail() {
      this.$router.push("detail")
    }
  }
}
</script>

<style lang="scss">
#index {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/image/suep.jpg");
  background-size: 100%;
  height: 100vh;

  h1 {
    font-size: 30px;
    color: #f6f6f6;
    font-weight: 400;
    margin-top: 30%;
  }

  span {
    font-size: 20px;
    margin-bottom: 20px;
    color: #f6f6f6;
    margin-left: 250px;
  }

  .but {
    background: none;
    font-size: 25px;
    color: #f6f6f6;
    border: 2px #f6f6f6 solid;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
  }

  .but:hover {
    transform: scale(1.2);
  }
}
</style>