<template>
  <div class="userorder">
    <el-header>
      <div class="toolbar f14">
        <div class="f18 marginb20">我的订单</div>
        <span :class="[{ ec7: activeIndex == 0 }, 'cursor']" @click="tabHandler(0)">全部订单</span>
        <el-divider direction="vertical" />
        <span :class="[{ ec7: activeIndex == 1 }, 'cursor']" @click="tabHandler(1)">待发货</span>
        <el-divider direction="vertical" />
        <span :class="[{ ec7: activeIndex == 2 }, 'cursor']" @click="tabHandler(2)">待收货</span>
        <el-divider direction="vertical" />
        <span :class="[{ ec7: activeIndex == 3 }, 'cursor']" @click="tabHandler(3)">已取消</span>
        <el-divider direction="vertical" />
        <span :class="[{ ec7: activeIndex == 4 }, 'cursor']" @click="tabHandler(4)">已完成</span>
      </div>
    </el-header>

    <el-main>
      <el-scrollbar class="">
        <el-card class="box-card marginb10">
          <template #header>
            <div class="f12 flex b99 acenter c999">
              <span class="flex1">订单号：9198383838 下单时间：2022-11-11 12:00:00</span>
              <span>已收货</span>
            </div>
          </template>
          <div v-for="o in 2" :key="o" class="borb padb10 padt10 f14">
            <el-row :gutter="10" align="middle">
              <el-col :span="4" class="center">
                <img width="100" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" />
              </el-col>
              <el-col :span="8">
                <div>
                  <div class="marginb6 bold f16">服装一号</div>
                  <div class="marginb6">黑色</div>
                  <div>X1</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6">已发货</div>
                  <div class="ec7 cursor f12" @click="ViewLogistics">
                    <el-icon size="18px" class="mid"><Van /></el-icon>查看物流
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div>¥344</div>
                  <div>(支付宝支付)</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6">
                    <sys-confirm title="确定收到货了嘛" @onConfirm="onPopConfirm">
                      <template v-slot:content>
                        <el-button color="#ec7243" :dark="isDark" class="custom_btn">确认收货</el-button>
                      </template>
                    </sys-confirm>
                  </div>
                  <div class="marginb6">
                    <el-button plain class="custom_plain_btn">订单详情</el-button>
                  </div>
                  <div>
                    <sys-confirm>
                      <el-button color="#ec7243" :dark="isDark" class="custom_btn">确认收货</el-button>
                    </sys-confirm>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="box-card marginb10">
          <template #header>
            <div class="f12 flex b99 acenter c999">
              <span class="flex1">订单号：9198383838 下单时间：2022-11-11 12:00:00</span>
              <span>已收货</span>
            </div>
          </template>
          <div v-for="o in 1" :key="o" class="borb padb10 padt10 f14">
            <el-row :gutter="10" align="middle">
              <el-col :span="4" class="center">
                <img width="100" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt=""/>
              </el-col>
              <el-col :span="8">
                <div>
                  <div class="marginb6 bold f16">服装一号</div>
                  <div class="marginb6">黑色</div>
                  <div>X1</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6">已发货</div>
                  <div class="ec7 cursor f12" @click="ViewLogistics">
                    <el-icon size="18px" class="mid"><Van /></el-icon>查看物流
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div>¥344</div>
                  <div>(支付宝支付)</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6">
                    <sys-confirm title="确定收到货了嘛">
                      <template v-slot:content>
                        <el-button color="#ec7243" :dark="isDark" class="custom_btn">确认收货</el-button>
                      </template>
                    </sys-confirm>
                  </div>
                  <div class="marginb6">
                    <el-button plain class="custom_plain_btn">订单详情</el-button>
                  </div>
                  <div>
                    <sys-confirm title="确定要取消该订单嘛？">
                      <template v-slot:content>
                        <el-button color="#333" plain text>取消订单</el-button>
                      </template>
                    </sys-confirm>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-scrollbar>
    </el-main>
  </div>
  <!-- 物流弹框 -->
  <sys-dialog :visible="dialog.visible" @onClose="onClose" @onConfirm="onConfirm">
    <template v-slot:content>
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </template>
  </sys-dialog>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import SysDialog from "@/components/SysDialog.vue";
  import SysConfirm from "@/components/SysConfirm.vue";
  import useDialog from "@/hooks/useDialog";
  const { dialog, onClose, onConfirm } = useDialog();

  const ViewLogistics = () => {
    dialog.visible = true;
    dialog.title = "物流详情";
  };

  const activities = [
    {
      content: "Event start",
      timestamp: "2018-04-15",
    },
    {
      content: "Approved",
      timestamp: "2018-04-13",
    },
    {
      content: "Success",
      timestamp: "2018-04-11",
    },
  ];

  const delHandler = (id: string | number) => {
    console.log(id);
  };
  
  const activeIndex = ref<number>(0);
  const tabHandler = (num: number) => {
    activeIndex.value = num;
  };
  const onPopConfirm = () => {};
</script>

<style scoped>
  .user .el-card__header div {padding: 6px 10px;}
  .user .el-card__body .borb:last-child{border:0}
</style>

<style>
  .user .el-card__header {padding: 0;}
  .user .el-card__body{padding:0 10px;}
</style>