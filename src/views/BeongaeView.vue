<template>
    <div class="top">
        <button @click="$router.push('/')">back</button>
        <h4>{{ $route.params.id }}</h4>
        <button>exit</button>
    </div>
</template>

<script>
export default {
  name: 'BeongaeView',
  components: {
  }
}
</script>
