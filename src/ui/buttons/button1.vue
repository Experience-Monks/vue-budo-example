<template>
  <div class="foo">{{msg}}</div>
</template>

<style>
.foo {
  color: red;
  font: 13px sans-serif;
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue + Budo!'
    }
  }
}
</script>
