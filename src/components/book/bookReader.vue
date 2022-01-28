<template>
  <div class="book-reader">
    <div id="read"></div>
    <div class="ebook-mask" @click="onMaskClick"></div>
  </div>
</template>

<script setup>
import Epub from "epubjs";
import {ref, onMounted} from "vue";
import {booksStore} from "../../store/modules/books";
import {Toast} from "vant";

const rendition = ref(null)
const store = booksStore()

onMounted(() => {
  const fileName = 'http://r5hdvblif.hn-bkt.clouddn.com/2016_Book_AgileProcessesInSoftwareEngine.epub'
  initEpub(fileName)
})

function initEpub(file) {
  const loading = Toast.loading({
    message: '书籍加载中..',
    forbidClick: true,
  })
  const book = new Epub(file)
  store.setCURRENT_BOOK(book)
  rendition.value = book.renderTo('read', {
    width: innerWidth,
    height: innerHeight,
  })
  book.ready.then(res => {
    rendition.value.display()
    loading.clear()
  })
}

const onMaskClick = (e) => {
  let offsetX = e.offsetX;
  let width = window.innerWidth;
  if (offsetX > 0 && offsetX < 0.3 * width) {
    prePage()
  } else if (offsetX > 0 && offsetX > 0.7 * width) {
    nextPage()
  } else {
    toggleTitleAndMenu()
  }
  e.preventDefault();
  e.stopPropagation();
}
const prePage = () => {
  rendition.value.prev()
  hideTitleAndMenu()
}

const nextPage = () => {
  rendition.value.next()
  hideTitleAndMenu()
}
const toggleTitleAndMenu = () => {
  const visible = store.menuVisible
  store.setMenuVisible(!visible)
  if (!visible) {
    store.setSettingVisible(-1)
  }
}
const hideTitleAndMenu = () => {
  store.setMenuVisible(false)
  store.setSettingVisible(-1)
}
</script>

<style scoped>
.ebook-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: transparent;
}
</style>