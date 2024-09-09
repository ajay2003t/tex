<template>
    <div class="carousel">
      <button class="prev-button" @click="prev">‹</button>
      <div class="carousel-wrapper">
        <div
          class="carousel-item"
          v-for="(image, index) in images"
          :key="index"
          :style="carouselItemStyle"
        >
          <img :src="image" alt="Fabric" />
        </div>
      </div>
      <button class="next-button" @click="next">›</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'src/assets/car1.png',
          'src/assets/car2.png',
          'src/assets/car3.png',
          'src/assets/car4.png',
          'src/assets/car5.png',
          'src/assets/car6.png',
          'src/assets/car1.png',
          'src/assets/car1.png',
        ],
        currentSlide: 0,
        visibleSlides: 6,
      };
    },
    computed: {
      totalSlides() {
        return this.images.length; // Get the total number of images
      },
      carouselItemStyle() {
        return {
          transform: `translateX(-${this.currentSlide * (100 / this.visibleSlides)}%)`,
        };
      },
    },
    methods: {
      next() {
        // Ensure that the carousel loops back or stops at the end of images.
        if (this.currentSlide < this.totalSlides - this.visibleSlides) {
          this.currentSlide=this.currentSlide+20;
        } else {
          this.currentSlide = 0; // Loop back to the start when the end is reached.
        }
      },
      prev() {
        // Ensure that the carousel loops back to the previous set of images.
        if (this.currentSlide > 0) {
            this.currentSlide=this.currentSlide+20;
        } else {
          this.currentSlide = this.totalSlides - this.visibleSlides; // Loop back to the end when the start is reached.
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7em 0em;
    background-color: #f9f2e7;
  }
  
  .carousel-wrapper {
    display: flex;
    overflow: hidden;
    width: 85%;
  }
  
  .carousel-item {
    min-width: calc(100% / 6); /* Ensure that 6 items fit in the carousel */
    padding: 0 5px;
    transition: transform 0.5s ease;
  }
  
  .carousel-item img {
    width: 100%;
    border-radius: 5px;
  }
  
  .prev-button,
  .next-button {
    background: none;
    border: none;
    font-size: 10rem;
    cursor: pointer;
    color: #d97342;
  }
  </style>
  