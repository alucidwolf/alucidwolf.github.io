// Vue.component('button-counter', {
//   data: function(){
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">clicked {{count}} times</button>'
// })

Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{post.title}}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge Text
      </button>
      <div v-html="post.content"></div>
    </div>
    `
});

new Vue({
    el: '#app',
    data: {
        posts: [{
                id: 1,
                title: 'journey1',
                content: 'about my journey1'
            },
            {
                id: 2,
                title: 'journey2',
                content: 'about my journey2'
            },
            {
                id: 3,
                title: 'journey3',
                content: 'about my journey3'
            }
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmoount) {
            this.postFontSize += enlargeAmoount
        }
    }
});
