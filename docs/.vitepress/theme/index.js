import MyTheme from 'vitepress/theme'
import './color.css'
import Href from './Href.vue'
import Audioplay from './Asplay.vue'

export default {
    ...MyTheme,
    enhanceApp(ctx) {
        MyTheme.enhanceApp(ctx)
        ctx.app.component('Hf', Href)
        ctx.app.component('Aplay', Audioplay)
    },
}
