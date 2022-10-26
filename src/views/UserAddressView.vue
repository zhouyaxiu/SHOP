<script setup lang="ts">
import {ref} from "vue"
import Item from '../components/add_item.vue'
interface AddItem {
  id:number;
  username:string,
  mobile:number,
  address:string,
  isdefault:number
}
const addList=ref<AddItem[]>([
  {id:1,username:'作笑颜',mobile:181818181,address:'苏州市工地上干活法国',isdefault:1},
  {id:1,username:'方式告诉对方',mobile:181818181,address:'er也让也容易热议',isdefault:0},
  {id:1,username:'所发生的',mobile:181818181,address:'儿童热呀热呀',isdefault:0},
  {id:1,username:'阿斯弗萨芬',mobile:181818181,address:'威锋网regret',isdefault:0},
  {id:1,username:'热污染',mobile:181818181,address:'二月热呀热呀而已',isdefault:0},
])
</script>

<template>
  <div class="title line">
    <div v-for="item in addList" :key="item.id">
      <Item :proItem="item" />
    </div>
  </div>
</template>