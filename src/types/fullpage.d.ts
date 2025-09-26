// src/types/fullpage.d.ts
export {}

declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (anchor: string | number, slideIndex?: number) => void
      reBuild: () => void
      getActiveSection?: () => { index: number } | undefined
      // adicione outros métodos que você usar
    }
  }
}
