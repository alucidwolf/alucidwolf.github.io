(function () {
    let emailCheck = document.getElementById('app');

    if (emailCheck) {

        Vue.component(
            'my-component', {
                data: function () {
                    return {
                        email: ''
                    }
                },
                template: `
                <div class="form-group">
            <label class="col-sm-4 control-label">Email</label>
            <div class="col-sm-8">
                <input v-model="email" type="email" class="form-control" placeholder="Email">
            </div>
        </div>
                `
            }
        )

        new Vue({
            el: '#app'
        })
    }
})();
