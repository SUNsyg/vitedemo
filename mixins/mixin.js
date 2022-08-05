export const fav = {
    data() {
        return {
            num: 1
        }
    },
    methods: {
        favBtn(params) {
            this.num += params
        }
    }
}