import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export function useFadeInOnScroll() {
  const imageRefs = ref<HTMLElement[]>([])
  const observeElementRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    imageRefs.value.forEach((el) => {
      useIntersectionObserver(
        el,
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0')
            el.classList.add('animate__animated', 'animate__fadeIn')
          } else {
            el.classList.add('opacity-0')
            el.classList.remove('animate__animated', 'animate__fadeIn')
          }
        },
        { threshold: 0.5 },
      )
      el.classList.add('opacity-0') // Initialize with opacity-0
    })

    useIntersectionObserver(
      observeElementRef,
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0')
          entry.target.classList.add('animate__animated', 'animate__fadeIn')
        } else {
          entry.target.classList.add('opacity-0')
          entry.target.classList.remove('animate__animated', 'animate__fadeIn')
        }
      },
      {
        threshold: 0.5,
      },
    )
  })

  return { imageRefs, observeElementRef }
}
