import { Work } from '@/schemas/Work';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkState {
  works: Work[];
  createWork: (work: Work) => void;
}

export const useWorkStore = create<WorkState>()(
  persist(
    (set) => ({
      works: [],
      createWork: (work) => set((state) => ({ works: [...state.works, work] })),
    }),
    {
      name: 'work-storage',
    },
  ),
);
