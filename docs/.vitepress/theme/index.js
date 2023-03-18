import MyTheme from 'vitepress/theme'
import './color.css'
import Href from './href.vue'
import Audioplay from './asplay.vue'

export default {
    ...MyTheme,
    enhanceApp(ctx) {
        MyTheme.enhanceApp(ctx)
        ctx.app.component('Hf', Href)
        ctx.app.component('Aplay', Audioplay)
    },
}
