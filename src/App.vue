<template>
  <div id="app">
    <Query :query="query" @queryFn="queryReturnData"></Query>
  </div>
</template>

<script>
  import Query from './components/query/Query.vue'

  export default {
    name: 'app',
    data () {
      return {
        query: [
          {
            name: '编号六个字',
            type: 'text',
            field: 'uuid1',
            value: ''
          }, {
            name: '编号六个字',
            type: 'text',
            field: 'uuid2',
            value: ''
          }, {
            name: '编号六个字',
            type: 'select',
            field: 'uuid3',
            value: '0',
            options: [
              {
                label: '全部',
                value: '0'
              }, {
                label: '选项1',
                value: '01'
              }, {
                label: '选项2',
                value: '03'
              }
            ]
          }, {
            name: '编号六个字',
            type: 'date',
            field: 'uuid4',
            value: ''
          }, {
            name: '编号六个字',
            type: 'daterange',
            field: 'uuid5',
            value: ''
          }
        ]
      }
    },
    watch: {
      'query.0.value' (val) {
        console.log(val)
      }
    },
    methods: {
//      接收查询模块返回的函数，需要绑定给@queryFn
      queryReturnData (val) {
        console.log(val)
      }
    },
    components: {
      Query
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }
</style>
