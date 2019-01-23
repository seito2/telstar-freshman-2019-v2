Vue.component('MyHeader',{
    template: 
    '<header><img class="logo" src="./js/assets/telstar_logo_white.png"><nav class="active"><ul>' +
        '<li><a href="#" class="active">HOME</a></li>' +
        '<li><a href="#">PORTFOLIO</a></li>' +
        '<li><a href="contact.html">CONTACT</a></li>' +
        '<li><a href="#">OTHERS</a></li>' +
    '</ul></nav><a class="square_btn" v-on:click="toggle">{{ title }}</a></header>'
    ,
    data () {
        return {
          isActive: true,
          title: 'menu'
        }
    },
    methods: {
    toggle () {
        this.isActive = !this.isActive
        if (this.isActive) {
        this.title = 'menu'
        } else {
        this.title = 'close'
        }
    }
    }
})

new Vue({
    el: '#myheader'
})
