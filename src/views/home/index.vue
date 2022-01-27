<template>
  <div class="ebook-reader">
    <div id="read"></div>
    <div class="ebook-mask" @click="onMaskClick"></div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useUserStore} from "../../store/modules";
import Epub from 'epubjs'

const store = useUserStore()
const title = ref('首页')
const name = computed(() => store.name)
const age = computed(() => store.age)
const rendition = ref(null)
const touchStartX = ref(0),
    touchstartTime = ref(0),
    offsetX = ref(0),
    time = ref(0)
const
    setName = () => {
      store.setUserName('john')
    }
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
    // rendition.value.on('touchstart', event => {
    //   console.log(event.changedTouches[0])
    //   touchStartX.value = event.changedTouches[0].clientX
    //   touchstartTime.value = event.timeStamp
    // })
    // rendition.value.on('touchend', event => {
    //   console.log(event.changedTouches[0])
    //   offsetX.value = event.changedTouches[0].clientX - touchStartX.value
    //   time.value = event.timeStamp - touchstartTime.value
    //   if (time.value < 500 && offsetX.value > 40) {
    //     alert('上一页')
    //   } else if (time.value < 500 && offsetX.value < -40) {
    //     alert('下一页')
    //   } else {
    //     alert('中间')
    //   }
    //   event.passive = false
    //   event.stopPropagation() //阻止事件传播
    // })
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
    console.log('设置')
  }
  e.preventDefault();
  e.stopPropagation();
}

function prePage() {
  rendition.value.prev()
}

function nextPage() {
  rendition.value.next()
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