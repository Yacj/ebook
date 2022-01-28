import {defineStore} from "pinia";

export const booksStore = defineStore({
    id: 'books',
    state: () => ({
        fileName: '',
        menuVisible: false,
        settingVisible: -1, // -1:不显示,0:字号,1:主题,2:进度,3:目录
        defaultFontSize: 16, //电子书默认字体大小
        defaultFontFamily: 'Default',
        fontFamilyVisible: false,
        defaultTheme: 'Default',
        bookAvailable: false,
        progress: 0,
        section: 0,
        isPaginating: true,
        currentBook: null,
        navigation: null,
        cover: null,
        metadata: null,
        paginate: '',
        pageList: null,
        offsetY: 0,
        isBookmark: null,
    }),
    actions: {
        setFileName(name) {
            this.fileName = name;
        },
        setMenuVisible(visible) {
            this.menuVisible = visible;
        },
        setSettingVisible(visible) {
            this.settingVisible = visible;
        },
        setDefaultFontSize(fontSize) {
            this.defaultFontSize = fontSize;
        },
        setDEFAULT_FONT_FAMILY(font) {
            this.defaultFontFamily = font
        },
        setFONT_FAMILY_VISIBLE(visible) {
            this.fontFamilyVisible = visible
        },
        setDEFAULT_THEME(theme) {
            this.defaultTheme = theme
        },
        setBOOK_AVAILABLE(bookAvailable) {
            this.bookAvailable = bookAvailable
        },
        setPROGRESS(progress) {
            this.progress = progress
        },
        setSECTION(section) {
            this.section = section
        },
        setIS_PAGINATING(isPaginating) {
            this.isPaginating = isPaginating
        },
        setCURRENT_BOOK(currentBook) {
            this.currentBook = currentBook
        },
        setNAVIGATION(navigation) {
            this.navigation = navigation
        },
        setCOVER(cover) {
            this.cover = cover
        },
        setMETADATA(metadata) {
            this.metadata = metadata
        },
        setPAGINATE(paginate) {
            this.paginate = paginate
        },
        setPageLIST(pageList) {
            this.pageList = pageList
        },
        setOffSetY(offsetY) {
            this.offsetY = offsetY
        },
        setIS_BOOKMARK(isBookmark) {
            this.isBookmark = isBookmark
        },
        setSPEAKING_ICON_BOTTOM(speakingIconBottom) {
            this.speakingIconBottom = speakingIconBottom
        }
    }
})