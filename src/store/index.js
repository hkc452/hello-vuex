
export default {
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        increment ({commit}) {
            commit('increment')
        },
        async asyncInre ({commit}) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            }).then(() => commit('increment'))
        }
    }
}