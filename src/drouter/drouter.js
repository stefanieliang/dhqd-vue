let _Vue

class VueRouter {
  constructor(options) {
    console.log('new vuerouter')
    this.$options = options
  }
}

VueRouter.install = function(Vue) {
  console.log('use vuerouter');
  _Vue = Vue

  Vue.mixin({
    beforeCreate() {
      // console.log(Vue);
      Vue.prototype.$router = this
    }
  })
 
  console.log(111, _Vue)
  _Vue.component('router-link',{
    render: function(h) {
      return h('a',
                {
                  'attr':{
                    'href':'aaa'
                  }
                },
                'blabla'
              )
    }
  })
} 


export default VueRouter