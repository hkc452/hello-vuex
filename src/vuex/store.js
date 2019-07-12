import applyMixin from './mixin'


let Vue

export class Store {
    constructor (options = {}) {

        this._actions = options.actions || {}
        this._mutations = options.mutations || {}
        this._states = options.state || {}

        const store = this
        const {dispatch, commit} = store
        this.dispatch = function boundDispatch (type, payload) {
            return dispatch.call(store, type, payload)
        }
        this.commit = function boundCommit (type, payload, options) {
            return commit.call(store, type, payload, options)
        }
        resetStoreVM(this, this._states)

    }
    get state () {
        return this._vm._data.$$state
    }

    dispatch (_type, _payload) {
        const entry = this._actions[_type]
        if (!entry) return
        let context = {
            commit: this.commit,
            state: this._states
        }
        let result = entry(context, _payload)
        return isPromise(result) ? result : Promise.resolve(result)
    }
    commit (_type, _payload) {
        
        const entry = this._mutations[_type]
        if (!entry) return
        entry(this._states, _payload)
    }
    


}
function resetStoreVM (store, state) {
    
    const silent = Vue.config.silent
    Vue.config.silent = true
    store._vm = new Vue({
      data: {
        $$state: state
      }
    })
    Vue.config.silent = silent
   
}


function isPromise (val) {
    return val && typeof val.then === 'function'
  }

export function install (_Vue) {
    if (Vue && _Vue === Vue) return
    Vue = _Vue
    applyMixin(Vue)
}