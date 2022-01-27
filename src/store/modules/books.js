import {defineStore} from "pinia";

export const booksStore = defineStore({
    id: 'books',
    state: () => ({
        fileName: '',
        menuVisible: false
    }),
    actions: {
        setFileName(name) {
            this.fileName = name;
        },
        setMenuVisible(visible) {
            this.menuVisible = visible;
        }
    }
})