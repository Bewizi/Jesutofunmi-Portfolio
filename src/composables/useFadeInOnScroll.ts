import { onMounted, onUnmounted, ref } from 'vue'

export function useFadeInOnScroll() {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.1, // When 10% of the element is visible
    },
  )

  onMounted(() => {
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return { elementRef, isVisible }
}
