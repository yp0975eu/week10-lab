<template>
  <transition name="fade">
    <div class="alert alert-success" v-if="seeMessage">{{message}} {{mostRecentSignIn}}</div>
  </transition>
</template>
<script>
export default {
  name: "StudentMessage",
  props: {
    seeMessage: Boolean,
    message: String,
    mostRecentSignIn: String
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>