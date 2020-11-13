<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { userInfoServer } from "./request";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    // 发送请求
    userInfoServer.getUserName
      .getdata({
        queryParm: {
          id: 223,
        },
      })
      .then((res) => {
        console.log("res", res);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
