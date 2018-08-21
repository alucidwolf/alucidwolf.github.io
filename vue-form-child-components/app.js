(function () {
    Vue.component('dynamic-component', {
        template: `
        <div>
        <input v-model="userInput" @input="grabUserInput($event.target.value)"> Data for {{index}}
        <p>{{userInput}}</p>
        <button class="btn btn-primary" v-on:click="removeItem">Decrement Count</button>
        </div>
        `,
        props: ['index'],
        methods: {
            grabUserInput: function (data) {
                console.log(data);
                this.$parent.updateForm(data, this.index)
            },
            removeItem: function () {
                this.$parent.removeItem(this.index)
            }
        },
        data: function () {
            return {
                userInput: ''
            }
        }
    });

    new Vue({
        el: '#app',
        data: function () {
            return {
                userInput: [],
                entireForm: [],
                count: 4
            }
        },
        methods: {
            updateForm: function (data, index) {
                console.log(data, index);
                this.$set(this.entireForm, index, data)
            },
            addItem: function () {
                this.count++;
            },
            removeItem: function (index) {
                console.log(index);
                this.$set(this.entireForm, index, null)
                this.count--;
            }
        }
    })
})();
