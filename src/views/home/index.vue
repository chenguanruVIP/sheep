<template>
  <div class="home-container">
    <el-card :header="state.title">
      <el-form ref="ruleFormRef" :rules="rules" status-icon :model="state.form" label-width="120px">
        <el-form-item label="token" prop="token">
          <el-input v-model="state.form.token" />
        </el-form-item>
        <el-form-item label="次数" prop="count">
          <el-input v-model.number="state.form.count" placeholder="次数不宜过多，否则有封号的风险！" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" :loading="state.loading">执行</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
        <el-form-item class="success-text-form-item" v-show="state.successCount">
          <div class="success-text">成功{{state.successCount}}次！</div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { gameOver } from '@/api/home/index';

const ruleFormRef = ref<FormInstance>();

const rules = reactive<FormRules>({
  token: [
    { required: true, message: '必填项', trigger: 'change' },
  ],
  count: [
    { required: true, message: '必填项', trigger: 'change' }
  ]
});

const state = reactive({
  title: '羊了个羊通关秘籍',
  form: {
    token: '',
    count: 1
  },
  requestCount: 0,
  loading: false,
  successCount: 0
});

// 调用接口
function action (){
  state.loading = true;
  gameOver(state.form).then(response => {
    if(response.data.err_code == 0) {
      state.successCount++;
      state.requestCount--;
      if(state.requestCount>0) {
        action()
      }
    } else {
      ElMessage.error('服务器错误！');
    }
  }).catch(() => {
    state.loading = false;
    ElMessage.error('服务器错误！');
  }).finally(()=> {
    if(state.requestCount<=0) state.loading = false;
  });
}

// 提交表单
function submitForm () {
  ruleFormRef.value.validate((valid, fields) => {
    state.successCount = 0
    if (valid) {
      state.requestCount = state.form.count
      action()
    } else {
      console.log('error submit!', fields);
    }
  })
}

// 重置表单
function resetForm () {
  ruleFormRef.value.resetFields();
}

</script>

<style lang="scss" scoped>
.home-container {
  max-width: 1000px;
  margin: auto;
  .success-text {
    width: 100%;
  }
}
</style>

