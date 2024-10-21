<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />

  <!-- <van-cell title="展示弹出层" is-link @click="showPopup" /> -->
  <!-- 左侧弹出 -->
  <van-popup
    v-model:show="showLeft"
    position="left"
    :style="{ width: '30%', height: '100%' }"
  />
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>

    <!-- 路由展示区域 -->
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showLeft = ref(false)

const onClickLeft = () => history.back()
const onClickRight = () => (showLeft.value = true)

// 定义一个 ref 来存储激活的 tab
const active = ref(0)

// 获取路由对象
const router = useRouter()

// 定义标签切换的函数
const onChange = index => {
  active.value = index

  // 根据索引切换到相应的路由页面
  switch (index) {
    case 0:
      router.push('/home')
      break
    case 1:
      router.push('/search')
      break
    case 2:
      router.push('/friends')
      break
    case 3:
      router.push('/settings')
      break
    default:
      router.push('/home')
  }
}

showToast('提示内容')
</script>

<style scoped>
/* 你可以根据需求添加样式 */
</style>
