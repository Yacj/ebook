import {computed} from "vue";
import {booksStore} from "../store/modules/books";

export default function () {
    const store = booksStore()
    const menuVisible = computed(() => store.menuVisible)
    return {
        menuVisible
    }
}