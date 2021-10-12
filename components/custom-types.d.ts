
import Vue from 'vue'

// declare module 'vue/types/vue' {
//     interface Vue {
//         $myProperty: string
//     }
// }

// ComponentOptions объявляется в types/options.d.ts
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue.ComponentOptions> {
        title?: string
    }
}