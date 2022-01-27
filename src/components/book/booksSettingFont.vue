<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <div class="setting-font-size">
        <div class="preview" ref="left">
          <span :style="styleLeft" ref="leftText">A</span>
        </div>
        <div class="select">
          <van-slider v-model="value" @change="onChange"/>
        </div>
        <div class="preview" ref="right">
          <span :style="styleRight" ref="rightText">A</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "booksSettingFont"
}
</script>

<style scoped>

</style>