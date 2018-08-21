(function () {
    Vue.use(window.vuelidate.default)
    const {
        required,
        minLength
    } = window.validators

    new Vue({
        el: "#app",
        data: {
            text: ''
        },
        validations: {
            text: {
                required,
                minLength: minLength(5)
            }
        },
        methods: {
            status(validation) {
                return {
                    error: validation.$error,
                    dirty: validation.$dirty
                }
            }
        }
    })

})();
