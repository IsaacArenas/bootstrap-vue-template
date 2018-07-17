<template>
  <div>
    <app-nav></app-nav>

    <b-container style="margin-top: 20px">
        <b-row>
            <b-col><h3 class="text-center">Bienvenido, Erik Macias!</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
        <!-- <b-row class="p-3 p-md-5">
            <b-col>
                <router-link class="btn btn-lg btn-success" to="/public-info">Public Info</router-link>
            </b-col>
            <b-col>
                <router-link class="btn btn-lg btn-success" to="/private-info">Private Info</router-link>
            </b-col>
        </b-row> -->
        <b-row>
          <b-col>
            <h5 class="p-1 mt-3 mb-4">Mis Tasks:</h5>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="light"><b>Task 01</b></b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Tipo de tarea
                        <b-badge variant="secondary" pill>A003</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Estado de cuenta
                        <b-badge variant="success" pill>$0.00 MXN</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Próximo Pago
                        <b-badge variant="success" pill>Agosto 25, 2018</b-badge>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="light"><b>Task 02</b></b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Tipo de tarea
                        <b-badge variant="secondary" pill>A002</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Estado de cuenta
                        <b-badge variant="warning" pill>$1,200.00 MXN</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Fecha max de pago
                        <b-badge variant="warning" pill>Julio 15, 2018</b-badge>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="light"><b>Task 03</b></b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Tipo de tarea
                        <b-badge variant="secondary" pill>A003</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Estado de cuenta
                        <b-badge variant="success" pill>$0.00 MXN</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Próximo Pago
                        <b-badge variant="success" pill>Agosto 25, 2018</b-badge>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
    </b-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from '../../components/AppNav';
import AppFooter from '../../components/Footer';

export default {
  name: 'home',
  components: {
    AppNav, AppFooter,
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
