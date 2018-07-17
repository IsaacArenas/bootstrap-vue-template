<template>
  <footer class="footer">
    <div class="container text-center">
				<span class="footer-txt">&copy; 2018 <a href="#">[Cot-OS]</a> Todos los derechos reservados.</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #343a40!important;
  }
  .footer-txt {
    font-size: .8rem;
  }
  a {
    color: #dc3545;
  }
  span {
    color: #ffffff;
  }
</style>
