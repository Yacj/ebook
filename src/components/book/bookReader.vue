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

const rendition = ref(null)
const store = booksStore()

onMounted(() => {
  const fileName = 'http://r5hdvblif.hn-bkt.clouddn.com/2016_Book_AgileProcessesInSoftwareEngine.epub'
  initEpub(fileName)
})

function initEpub(file) {
  const book = new Epub(file)
  rendition.value = book.renderTo('read', {
    width: innerWidth,
    height: innerHeight,
  })
  console.log(rendition)
  book.ready.then(res => {
    rendition.value.display()
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
  store.setMenuVisible(false)
}

const nextPage = () => {
  rendition.value.next()
  store.setMenuVisible(false)
}
const toggleTitleAndMenu = () => {
  const visible = store.menuVisible
  store.setMenuVisible(!visible)
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