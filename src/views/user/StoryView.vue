<template>
  <SwiperImages>
    <template #firstImage>
      <img
        src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80"
        alt="swiperImage"
      />
    </template>
    <template #secondImage>
      <img
        src="https://images.unsplash.com/photo-1678929459787-b2e064262898?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="swiperImage"
      />
    </template>
    <template #thirdImage>
      <img
        src="https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="swiperImage"
      />
    </template>
  </SwiperImages>

  <div class="container py-7 py-lg-20">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-10">
        <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">關於品牌</li>
      </ol>
    </nav>

    <h1
      class="fs-2 text-primary mb-7 fw-bold"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      data-aos-once="true"
    >
      品牌故事與精神
    </h1>
    <section data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
      <p class="fs-7 text-primary font-noto-serif lh-lg text-start">
        綠羊 GreenSheep handmade jewelry
        的起源，源自創辦人那份對美的無窮追求。她追逐著優雅和美，並以自己的方式重新定義風格與流行。她深信，每一個人都應該能夠享受到獨特的珠寶飾品，而這些飾品應該是原創且擁有自信的。因此，綠羊
        Green Sheep 誕生了，成為那個能夠實現這個信念的品牌。
      </p>
    </section>
    <section data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
      <p class="fs-7 text-primary font-noto-serif lh-lg text-start">
        The genesis of Green Sheep traces back to the founder's unwavering pursuit of beauty. With
        an unyielding passion, she embraced elegance and redefined style and trends on her own
        terms. Firmly believing that every individual deserves to enjoy unique jewelry, Green Sheep
        came into being—a brand that embodies originality and self-assurance.
      </p>
    </section>

    <section data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
      <div class="my-7 my-lg-10">
        <div class="row justify-content-center z-0 mb-6">
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="@/assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />
            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h5 mb-2 opacity-75 d-flex flex-column">自信</span>
              <span class="h4">CONFIDENCE</span>
            </div>
          </span>
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="@/assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />
            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h5 mb-2 opacity-75 d-flex flex-column">獨特</span>
              <span class="h4">UNIQUE</span>
            </div>
          </span>
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="@/assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />
            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h5 mb-2 opacity-75 d-flex flex-column">優雅</span>
              <span class="h4">ELEGANT</span>
            </div>
          </span>
        </div>
      </div>
    </section>
    <div class="row mb-5" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
      <div class="col-lg-8 col-12">
        <p class="fs-7 text-primary font-noto-serif lh-lg text-start">
          <span class="fw-bold">綠羊 GreenSheep 的品牌精神是獨特而優雅的。</span><br />
          他代表著對自然的敬畏，彷彿迷人的綠洲，帶給人們內心的平靜與柔和。每一位佩戴者都像一隻羊，柔軟而堅定，他們不害怕與眾不同，因為他們知道自己是最優雅的綠羊。
        </p>

        <p class="fs-7 text-primary font-noto-serif lh-lg text-start">
          The brand spirit of Green Sheep resonates with uniqueness and elegance. It symbolizes a
          reverence for nature, akin to an enchanting oasis that evokes tranquility and softness
          within people's hearts. Each wearer embodies the qualities of a sheep—firm and yet tender.
          They fearlessly embrace their individuality, knowing they are the epitome of elegance, the
          Green Sheep.
        </p>
      </div>
      <div class="col-lg-4 col-12">
        <img
          class="mt-4 mt-lg-0"
          src="@/assets/images/IMG_5672-sm.jpg"
          alt="珠寶"
          data-aos="fade-out"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        />
      </div>
    </div>
    <h3
      class="h2 my-15 fw-medium mx-auto"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      data-aos-once="true"
    >
      EMBRACE YOUR INNER GREEN SHEEP
    </h3>

    <div
      class="row mb-10"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <div class="col-lg-5 col-12">
        <img
          class="mb-4 mb-lg-0"
          src="@/assets/images/lucio-patone-ssJoxTDiUPg-unsplash-sm.jpg"
          alt="精湛工藝"
          data-aos="fade-out"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        />
      </div>
      <div class="col-12 col-lg-7">
        <p class="fs-7 text-start text-primary font-noto-serif lh-lg text-start">
          在綠羊 GreenSheep
          的世界裡，每一件珠寶都是一個故事的開端。它們不僅是獨特設計的結晶，更是佩戴者心靈的寄託。這些珠寶融合了璀璨的寶石與精心挑選的材料，並以台灣在地手工製作，呈現出最高品質與精湛工藝。
        </p>

        <p class="fs-7 text-start text-primary font-noto-serif lh-lg text-start">
          In the world of Green Sheep, each piece of jewelry is the genesis of a story. They are not
          mere products of exceptional design, but a testament to the wearer's soul. These jewels
          combine dazzling gemstones, carefully selected materials, and the finest craftsmanship
          born from local artisans in Taiwan.
        </p>
      </div>
    </div>

    <div
      class="mb-20"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <p class="fs-7 text-start text-primary font-noto-serif lh-lg text-start">
        綠羊 GreenSheep
        的珠寶不同於市面上的批發品，他們是經過設計師的巧思與創意結合而成，專為那些追求個人風格、堅持原創的人而設。綠羊
        GreenSheep 希望透過這些珠寶，讓每一位佩戴者感受到自身的獨特與美麗，而他們就是
        <span class="fw-bold">這個世界上最獨一無二的存在。</span>
      </p>

      <p class="fs-7 text-start text-primary font-noto-serif lh-lg text-start">
        Green Sheep jewelry sets itself apart from wholesale accessories found elsewhere. The
        designs are a fusion of the designer's imagination and creativity, catering to those who
        seek personal style and appreciate the essence of originality.
      </p>
    </div>
  </div>
</template>
<script>
import SwiperImages from '@/components/SwiperImages.vue'

export default {
  components: {
    SwiperImages
  }
}
</script>
<style scoped>
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
