import {computed} from "vue";
import {booksStore} from "../store/modules/books";

const store = booksStore()

export function bookHooks() {
    const menuVisible = computed(() => store.menuVisible)
    const settingVisible = computed(() => store.settingVisible)
    const currentBook = computed(() => store.currentBook)
    const fontSize = computed(() => store.defaultFontSize)
    return {
        menuVisible,
        settingVisible,
        currentBook,
        fontSize
    }
}

export function bookHooksActions() {
    const setFontSize = (size) => {
        store.setDefaultFontSize(size)
    }
    return {
        setFontSize
    }
}