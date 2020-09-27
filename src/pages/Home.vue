<template>
   <div class="container">
       <m-header></m-header>
       <m-nav></m-nav>
       <m-share></m-share>
       <m-Bodynav></m-Bodynav>
       <m-content></m-content>
       <m-foot></m-foot>
   </div>

</template>

<script>
import header from '../components/header.vue'
import nav from '../components/nav.vue'
import share from '../components/share.vue'
import Bodynav from '../components/Bodynav.vue'
import content from "../components/content.vue"
import foot from "../components/foot.vue"
export default {
    name: 'Home',
    data(){
        return{
        };
    },
    methods:{
        
    },
    components:{
        "m-header":header,
        'm-nav':nav,
        "m-share":share,
        "m-Bodynav":Bodynav,
        "m-content":content,
        "m-foot":foot,
    },
    create(){

    }
};
</script>

<style>
</style>