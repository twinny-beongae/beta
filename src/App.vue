<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/event">Event</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    decodeJwtResponse (token) {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))

      return JSON.parse(jsonPayload)
    },
    isValidToken (token) {
      if (token === null) return false
      const responsePayload = this.decodeJwtResponse(token)
      const exp = responsePayload.exp
      const currentTime = (new Date()) / 1000
      if (currentTime < exp) return true
      else return false
    }
  },
  mounted () {
    console.log(this.token)
    if (this.isValidToken(this.token)) {
      this.$router.replace('/')
      // localStorage.removeItem('token')
    } else {
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
