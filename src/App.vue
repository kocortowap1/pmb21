<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Home/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
#app{
  margin: 0;
  padding: 0;
}
</style>
