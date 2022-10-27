<script setup lang="ts">

</script>

<template>
  <div class="main_wrapper product">
    <div>支付成功</div>
    <div>￥99</div>
    <el-result
      icon="success"
      title="Success Tip"
      sub-title="Please follow the instructions"
    >
      <template #extra>
        <el-button type="primary">Back</el-button>
      </template>
    </el-result>
    <div>
      <el-descriptions
        title="Vertical list with border"
        direction="vertical"
        :column="4"
        :size="size"
        border
      >
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>


<style scoped>

</style>