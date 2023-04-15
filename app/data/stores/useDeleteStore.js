import { create } from 'zustand'

export const useDeleteStore = create(set => ({
    activeDeleteMode: false,
    setActiveMode: () => set((state) => ({ activeDeleteMode: !state.activeDeleteMode }))
  })
)
