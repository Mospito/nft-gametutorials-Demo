import { data } from 'autoprefixer'
import create from 'zustand'

export const user_useStore = create((set,get) => ({
    // count: 1,
    // inc: () => set((state) => ({ count: state.count + 1 })),
    user_id: "0xF43EE49Fccb7Af7fB7781A71A87D850B35bb264b",
    set_user_id: (data) => set((state) => ({user_id: data }))
    // set_user_id: (data) => set({user_id: data+1}),
  }))





