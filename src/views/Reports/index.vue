<template>
  <div>
    <app-nav></app-nav>

    <b-container style="margin-top: 20px">
        <b-row>
            <b-col><h2 class="text-center">Reportes e Incidentes</h2></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
        <b-row>
            <b-col>

            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from '../../components/AppNav';

export default {
  name: 'home',
  components: {
    AppNav,
  },
  methods: {
    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
