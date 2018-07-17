<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Secret Info</h3>
    <hr/>

    <div class="col-sm-4" v-for="info in privateInfo">
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ info.id }} </h3>
        </div>
        <div class="panel-body">
          <p><span class="badge alert-info"> Sponsor: </span> {{ info.id }} </p>
          <p><span class="badge alert-danger"> SeedFund: </span><strong> ${{ info.id }} </strong></p>
        </div>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="jumbotron text-center">
        <h2>View Public Info</h2>
        <router-link class="btn btn-lg btn-success" to="/"> Public Info </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav';
import { getPrivateInfo } from '../utils/info-api';

export default {
  name: 'privateInfo',
  components: {
    AppNav,
  },
  data() {
    return {
      privateInfo: '',
    };
  },
  methods: {
    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },
    getPrivateInfo() {
      getPrivateInfo().then((info) => {
        this.privateInfo = info.data;
      });
    },
  },
  mounted() {
    this.getPrivateInfo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
