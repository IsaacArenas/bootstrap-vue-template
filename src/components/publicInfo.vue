<template>
  <div>
    <app-nav></app-nav>

    <b-container class="bv-example-row" style="margin-top: 20px">
        <b-row>
            <b-col><h2>Profile Details</h2></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
        <b-row>
            <b-col v-for="info in publicInfo" :key="info.id">
              <b-card v-bind:title="info.first_name + ' ' + info.last_name"
                        v-bind:img-src="info.avatar"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                  <p class="card-text">ID: {{info.id}}</p>
              </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
              <div class="jumbotron text-center">
                <h2>View Private Info</h2>
                <router-link class="btn btn-lg btn-success" to="/private-info">Private Info</router-link>
              </div>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from './AppNav';
import { getPublicInfo } from '../utils/info-api';

export default {
  name: 'publicInfo',
  components: {
    AppNav,
  },
  data() {
    return {
      publicInfo: '',
    };
  },
  methods: {
    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },
    getPublicInfo() {
      getPublicInfo().then((info) => {
        this.publicInfo = info.data;
      });
    },
  },
  mounted() {
    this.getPublicInfo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
