import type { Endpoints } from '@/types/axios';

const endpoints: Endpoints = {
  login: {
    method: 'POST',
    url: '/auth/login',
    manageToast: res => !!res.message,
  },
  getProfile: {
    method: 'GET',
    url: '/auth/profile',
  },
  getAllUsers: {
    method: 'GET',
    url: '/users',
  },
} as const;

export default endpoints;
