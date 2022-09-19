import axios from 'axios';

console.log(import.meta.env.MODE)

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '/api' : 'https://cat-match.easygame2021.com',
  timeout: 50000
});

// 导出 axios 实例
export default service;