<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <div class="setting-font-size">
        <div class="preview" ref="left">
          <span ref="leftText">Aa-</span>
        </div>
        <div class="select">
          <div class="select-wrapper">
            <van-slider v-model="bookFontSize" active-color="#86909c" @change="fontSizeChange">
              <template #button>
                <div class="select-size-button">{{ bookFontSize }}</div>
              </template>
            </van-slider>
          </div>
        </div>
        <div class="preview" ref="right">
          <span ref="rightText">Aa+</span>
        </div>
      </div>
      <div class="setting-font-family">
        <div class="setting-font-family-text-wrapper" @click="showFontFamily=true">
          <span class="setting-font-family-text">Default></span>
        </div>
      </div>
    </div>
  </transition>
  <van-action-sheet v-model:show="showFontFamily" :actions="actions" @select="onSelect"/>
</template>

<script setup>
import {bookHooks, bookHooksActions} from "../../hooks/book";
import {onMounted, ref} from "vue";

const {menuVisible, settingVisible, currentBook, fontSize} = bookHooks()
const {setFontSize} = bookHooksActions()
const bookFontSize = fontSize

const showFontFamily = ref(false)

const actions = [
  {name: '选项一'},
  {name: '选项二'},
  {name: '选项三'},
];
onMounted(() => {
  currentBook.value.rendition.themes.fontSize(fontSize + 'px')
})

const fontSizeChange = (size) => {
  setFontSize(size)
  currentBook.value.rendition.themes.fontSize(size + 'px')
}

const onSelect = () => {
  showFontFamily.value = false
}
</script>

<style scoped lang="scss">
.setting-wrapper {
  position: absolute;
  bottom: 48px;
  left: 0;
  z-index: 190;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
  background: #fff;

  .setting-font-size {
    flex: 2;
    display: flex;
    height: 100%;

    .preview {
      flex: 0 0 40px;
      @include center;
      font-size: 15px;
    }

    .select {
      display: flex;
      flex: 1;

      .select-wrapper {
        flex: 1;
        display: flex;
        align-items: center;

        .select-size-button {
          color: transparent;
        }
      }
    }
  }

  .setting-font-family {
    flex: 1;
    font-size: 14px;
    @include center;

    .setting-font-family-text-wrapper {
      @include center;
    }

    .setting-font-family-icon-wrapper {
      @include center;
    }
  }
}
</style>