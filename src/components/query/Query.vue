<template>
  <div class="outerdiv">
    <p class="title">查询</p>
    <!--循环查询字段-->
    <template v-for="(tem, i) in quertdata">
      <div class="querybox">
        <span class="tit">{{tem.name}}：</span>
        <!--文本输入块-->
        <template v-if="tem.type === 'text'">
          <el-input class="queryinput" v-model="tem.value" placeholder="请输入内容"></el-input>
        </template>
        <!--下拉框选择块-->
        <template v-if="tem.type === 'select'">
          <el-select class="queryinput" v-model="tem.value" placeholder="请选择">
            <el-option
              v-for="item in tem.options"
              :label="item.label"
              :value="item.value"
              :key="item.id">
            </el-option>
          </el-select>
        </template>
        <!--时间选择器-->
        <template v-if="tem.type === 'date'||tem.type === 'daterange'">
          <el-date-picker
            class="queryinput"
            v-model="tem.value"
            :type="tem.type"
            placeholder="选择日期">
          </el-date-picker>
        </template>
      </div>

    </template>
    <div>
      <el-button class="querybutton f14" type="primary" @click="queryClick()" icon="search">查询</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'query',
    props: ['query'],
    data () {
      return {
        quertdata: this.query
      }
    },
    watch: {
      quertdata: {
        handler: function (val) {
          console.log('查询信息更新')
        },
        deep: true
      }
    },
    mounted () {
      console.log(this.query)
    },
    methods: {
      queryClick () {
        let i = 0
        let len = this.quertdata.length
        let data = {}

        console.log(this.osZero(2))

        for (; i < len; i++) {
          if (!!this.quertdata[i].value && this.quertdata[i].value !== undefined) {
            if (this.quertdata[i].type === 'date') {
              let d = new Date(this.quertdata[i].value)
              let time = this.osZero(d.getFullYear()) + '-' + this.osZero(d.getMonth() + 1) + '-' + this.osZero(d.getDate())
              console.log(time)
              data[this.quertdata[i].field] = time
            } else {
              data[this.quertdata[i].field] = this.quertdata[i].value
            }
          }
        }
        console.log(data)
        this.$emit('queryFn', data)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  .querybox {
    width: auto;
    font-size: 14px;
    margin: 10px 0 0 20px;
    display: inline-block;
    .tit {
      width: 96px;
      display: inline-block;
    }
    .to {
      padding: 0 10px;
    }
    .queryinput {
      width: 230px;
    }
  }

  .querybutton {
    margin: 20px;
  }
</style>
