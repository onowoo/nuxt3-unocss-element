<template>
  <el-badge :value="flagValue?.text" class="item" :type="flagValue?.type">
    <div px-1>{{
      name
    }}</div>
  </el-badge>
</template>
<script setup>
const props = defineProps({
    flag:{
        type:String,
        default: ""
    },
    name: {
        type:String,
        default: ""
    }
})
const flagType = [
    {
        flag:'hot',
        text:'热门',
        type:'danger'
    },
    {
        flag:'new',
        text:'新',
        type:'danger'
    },
    {
        flag:'recommend',
        text:'推荐',
        type:'primary'
    },
    {
        flag:'top',
        text:'置顶',
        type:'primary'
    },
    {
        flag:'focus',
        text:'焦点',
        type:'warning'
    },
]
const flagValue = computed(()=> flagType.find(item => item.flag === props.flag))
</script>