<template>
  <div class="login">
    <img alt="Twinny Beongae logo" src="../assets/twinny-beongae-logo.png">
  </div>
  <div>
    <p><b>트위니 계정</b>으로 로그인해주세요.</p>
  </div>
  <div class="googleButton">
    <div id="continueWithGoogle"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
