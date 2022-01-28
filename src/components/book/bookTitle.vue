<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left" @click="back">
        <span class="icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {bookHooks} from "../../hooks/book";

const {menuVisible} = bookHooks()

const back = () => {
  history.back()
}
</script>

<style scoped lang="scss">
.title-wrapper {
  background: #fff !important;
  color: #4c5059 !important;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: 48px;
  box-shadow: 0 12px 12px rgba(26, 26, 26, 0.15);
  font-size: 22px;

  .left {
    flex: 0 0 37px;
    @include right;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    .icon-wrapper {
      flex: 0 0 37px;
      @include left;
    }
  }
}
</style>