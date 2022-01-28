import {computed} from "vue";
import {booksStore} from "../store/modules/books";

export default function () {
    const store = booksStore()

    const menuVisible = computed(() => store.menuVisible)
    const settingVisible = computed(() => store.settingVisible)
    const currentBook = computed(() => store.currentBook)
    const fontSize = computed(() => store.defaultFontSize)

    const setFontSize = (size) => {
        store.setDefaultFontSize(size)
    }

    return {
        menuVisible,
        settingVisible,
        currentBook,
        fontSize,
        setFontSize
    }
}