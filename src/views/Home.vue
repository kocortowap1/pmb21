<template>
  <div class="home">
    <section class="my-0 ">
      <Jumbotron />
    </section>
    <section class="my-md-2">
      <!-- <Jalur /> -->
    </section>
    <section class="my-0">
      <!-- <Alur /> -->
    </section>
    <section>
      <!-- <Footer /> -->
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
// import Jalur from '../components/Home/jalur'
// import Alur from '../components/Home/alurReguler'
// import Footer from '../components/Home/Footer'
import Jumbotron from '../components/Home/jumbotron'

export default {
  name: 'Home',
  components: {
    // Jalur,
    // Alur,
    // Footer,
    Jumbotron
  }
}
</script>
