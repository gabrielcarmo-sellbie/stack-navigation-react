import { StackType } from '@/types/stack.type';
import { create } from 'zustand';

type StackProps = {
  stacks: StackType[];
  setStacks: (stacks: StackType[]) => void;
  currentStack: number;
  previousStack: number | null;
  setCurrentStack: (index: number) => void;
  increaseStack: () => void;
  decreaseStack: () => void;
};

export const useStackStore = create<StackProps>((set, get) => ({
  stacks: [],
  setStacks: (stacks: StackType[]) => set({ stacks }),
  currentStack: 0,
  previousStack: null,
  setCurrentStack: (index: number) => set({ currentStack: index }),
  increaseStack: () => {
    if (get().currentStack + 1 < get().stacks.length) {
      set((state) => ({ previousStack: state.currentStack }))
      set((state) => ({ currentStack: state.currentStack + 1 }))
    }
  },
  decreaseStack: () => {
    if (get().currentStack - 1 >= 0) {
      set((state) => ({ previousStack: state.currentStack }))
      set((state) => ({ currentStack: state.currentStack - 1 }))
    }
  },
}));