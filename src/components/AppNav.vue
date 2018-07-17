<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">
      <img src="../assets/nisoph_logo.png" class="d-inline-block align-top" alt="Nisoph"> <span>Bootstrap-vue Template</span>
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" to="/"><icon name="home"></icon> Inicio</b-nav-item>
        <b-nav-item href="#" to="/profile"><icon name="user"></icon> Perfil</b-nav-item>
        <b-nav-item href="#" to="/notifications"><icon name="bell"></icon> Avisos <b-badge variant="danger" style="vertical-align: super;">2</b-badge></b-nav-item>
        <b-nav-item href="#" to="/promotions"><icon name="shopping-bag"></icon> Promociones</b-nav-item>
        <b-nav-item href="#" to="/reports"><icon name="file"></icon> Reportes</b-nav-item>
        <b-nav-item class="dropdown-divider d-md-none d-lg-none d-xl-none"></b-nav-item>
        <b-nav-item href="#" @click="handleLogin()" hidden><icon name="sign-in"></icon> Ingresar</b-nav-item>
        <b-nav-item href="#" @click="handleLogout()"><icon name="sign-out"></icon> Salir</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// import { isLoggedIn, login, logout } from '../../utils/auth';

export default {
  name: 'app-nav',
  methods: {
    handleLogin() {
      // login();
      return true;
    },
    handleLogout() {
      // logout();
      return false;
    },
    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
</style>
