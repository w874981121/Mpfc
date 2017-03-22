<!--
*   (:tabindex)  参数传递序号
*
*    (:spantxt)
*     name：" "
*     type: "text"/"select",  两个类型可选，下拉框和文本框
*     field: " "      输入框内容绑定
*     optionlist     下拉框选项列表     例{txt: "二次退单",index: "05"}
*     placeholder    默认提示选项
*     timeevt        时间空间开启关闭
*
*     v-model.trim=""
*
-->
<template>
	<div class="boxWidth" :style="boxWidthStyle">
		<div class="label_text_box">
			<span :style="{color:spantxt.namecolor}">{{spantxt.name}}:</span>
			<input v-if="spantxt.type=='text'"
             @click="showCalendar(spantxt.timeevt,$event,tabindex)"
             :tabindex="tabindex" type="text" :placeholder="spantxt.placeholder ? spantxt.placeholder : ''"
             :disabled="spantxt.disabled"
             v-model="spantxt.field" />
			<span class="jg" v-if="spantxt.type==='text'&&spantxt.field_ != undefined">─</span>
			<input v-if="spantxt.type==='text'&&spantxt.field_ != undefined" @click="showCalendar(spantxt.timeevt,$event,tabindex,'field_')" :tabindex="tabindex" type="text" :placeholder="spantxt.placeholder_ ? spantxt.placeholder_ : ''" :disabled="spantxt.disabled" v-model="spantxt.field_" />
			<select v-if="spantxt.type=='select'" v-model="spantxt.field">
				<option v-for="(tim, index) in spantxt.optionlist" :value="tim.index ? tim.index : tim">{{tim.index ? tim.txt : tim}}</option>
			</select>
		</div>
	</div>
</template>
<script>
	export default {
		name: "spanInputText",
		props: ["spantxt", "tabindex"],
		computed:{
			boxWidthStyle(){
				this.spantxt.field_ != undefined ? "width:522px" : "width:320px"
			}
		},
		methods: {
			showCalendar(f, val, index, field_) {
				if(f) {
					this.$emit("on-show", val, index, field_)
				}
				return false
			},
			updateValue: function(value) {
				this.$emit('input', value)
			}
		}
	}
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
	$pl: 20px;
	.boxWidth {
		float: left;
		.label_text_box {
			display: block;
			height: 30px;
			margin: 10px 20px 0 20px;
			span {
				display: block;
				float: left;
				width: 98px;
				height: 30px;
				line-height: 30px;
				text-align: left;
				padding-right: 10px;
				font-size: 14px;
			}
			.jg {
				width: auto;
				padding-left: 10px;
			}
			input {
				display: block;
				float: left;
				width: 160px;
				padding: 0 5px;
				height: 28px;
				border: 1px solid #ccc;
				font-size: 12px;
				border-radius: 2px;
			}
			select {
				display: block;
				float: left;
				width: 172px;
				height: 28px;
				border: 1px solid #ccc;
				font-size: 12px;
				border-radius: 2px;
			}
		}
	}
</style>
