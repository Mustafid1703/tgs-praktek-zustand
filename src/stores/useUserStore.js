import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: {
    name: 'momy',
    role: 'Senior Frontend Engineerr',
    email: 'alex.morgan@example.com',
    bio: 'Passionate developer crafting clean code and modern web experiences.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=momy',
  },
  metrics: {
    projects: 1434,
    tasksDone: 8954,
    points: '12,504,455',
    isActive: true,
  },
  updateProfile: (updatedData) =>
    set((state) => ({ user: { ...state.user, ...updatedData } })),
  updateMetrics: (updatedMetrics) =>
    set((state) => ({ metrics: { ...state.metrics, ...updatedMetrics } })),
}));