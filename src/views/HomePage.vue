<template>
  <div class="container">
    <!-- Header -->
    <div class="row">
      <div class="col-3 pt-5 border-end">
        <ul class="list-unstyled">
          <li >
            <a href="#" class="link-secondary text-decoration-none">Woman's Fashion</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Men's Fashion</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Electronics</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Home & Life Style</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Medicine</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Sports & Outdoor</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Baby's Toy</a>
          </li>
          <li class="mt-2">
            <a href="#" class="link-secondary text-decoration-none">Health & Beauty</a>
          </li>
        </ul>
      </div>
      <div class="col-8 ms-auto mt-1">
         <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Carousel 1 -->
          <div class="carousel-item  active" data-bs-interval="2000">
            <div class="row">
            <div class="col-4 ms-5 mt-5">
              <div class="d-flex align-items-center">
                <img src="@/assets/apple-logo.png" alt="apple_logo" class="me-2 mt-4">
                <p class="d-inline-block mt-5">Iphone 14 Series</p>
              </div>
              <h1 class="display-4 fw-bold">Up to 10% off Voucher</h1>
              <a href="#" class="d-inline-block ms-5 me-3 text-light">Shop Now <img src="@/assets/arrow-icon.svg" class="d-inline-block ms-2" alt=""></a>
            </div>
            <div class="col-4 text-right">
              <img src="@/assets/hero_img1.png" class="d-block float-start" alt="">
            </div>
          </div>
          </div>
          <!-- Carousel 2 -->
          <div class="carousel-item" data-bs-interval="2000">
            <div class="row">
            <div class="col-4 ms-5 mt-5">
              <div class="d-flex align-items-center">
                <img src="@/assets/ps-logo.jpg" style="width:40px; height:40px" alt="apple_logo" class="me-2 mt-4 rounded">
                <p class="d-inline-block mt-5">SONY Plastation 5</p>
              </div>
              <h1 class="display-4 fw-bold">Up to 10% off Voucher</h1>
              <a href="#" class="d-inline-block ms-5 me-3 text-light">Shop Now <img src="@/assets/arrow-icon.svg" class="d-inline-block ms-2" alt=""></a>
            </div>
            <div class="col-4 text-right">
              <img src="@/assets/PS5.png" class="d-block float-start" alt="" style="width: 496px;height:328px">
            </div>
          </div>
          </div>
          <!-- Carousel 3 -->
          <div class="carousel-item" data-bs-interval="2000">
            <div class="row">
            <div class="col-4 ms-5 mt-5">
              <div class="d-flex align-items-center">
                <img src="@/assets/fashion-logo.png" style="width: 40px; height: 40px;" alt="apple_logo" class="me-2 mt-4">
                <p class="d-inline-block mt-5">Woman Hat</p>
              </div>
              <h1 class="display-4 fw-bold">Up to 10% off Voucher</h1>
              <a href="#" class="d-inline-block ms-5 me-3 text-light">Shop Now <img src="@/assets/arrow-icon.svg" class="d-inline-block ms-2" alt=""></a>
            </div>
            <div class="col-4 text-right">
              <img src="@/assets/woman-hat.png" class="d-block float-start" alt="" style="width: 496px;height:328px">
            </div>
          </div>
          </div>
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->
      </div>
      </div>
    </div>
    <!-- Categories -->
    <div class="row mt-5 mb-5 marginx">
      <div class="col-12 mt-5">
        <div class="mt-5">
          <img src="@/assets/retangle.svg" alt="retangle">
          <span class="ms-4 fs-5 fw-bold alpha">Categories</span>
        </div>
        <div class="mt-3">
          <h1 class="fw-bold">Browse By Category</h1>
        </div>
        <div>
          <div class="row mt-5">
            <div class="col-2">
              <router-link to="/" class="card category-hover container-fluid text-decoration-none">
                <div class="card-body text-center">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                  <p class="fs-5">Phones</p>
                </div>
              </router-link>
            </div>
            <div class="col-2">
                <router-link to="/" class="card category-hover container-fluid text-decoration-none">
                  <div class="card-body text-center">
                    <ion-icon name="tv-outline"></ion-icon>
                    <p class="fs-5">Computers</p>
                  </div>
                </router-link>
            </div>
              <div class="col-2">
              <router-link to="/" class="card category-hover container-fluid text-decoration-none">
                <div class="card-body text-center">
                  <ion-icon name="watch-outline"></ion-icon>
                  <p class="fs-5">Smart Watch</p>
                </div>
              </router-link>
            </div>
            <div class="col-2">
              <router-link to="/" class="card category-hover container-fluid text-decoration-none">
                <div class="card-body text-center">
                  <ion-icon name="camera-outline"></ion-icon>
                  <p class="fs-5">Camera</p>
                </div>
              </router-link>
            </div>
              <div class="col-2">
              <router-link to="/" class="card category-hover container-fluid text-decoration-none">
                <div class="card-body text-center">
                  <ion-icon name="headset-outline"></ion-icon>
                  <p class="fs-5">Headphones</p>
                </div>
              </router-link>
            </div>
              <div class="col-2">
              <router-link to="/" class="card category-hover container-fluid text-decoration-none">
                <div class="card-body text-center">
                  <ion-icon name="game-controller-outline"></ion-icon>
                  <p class="fs-5">Gaming</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
    </div>
    <!-- Bluetooth Box -->
    <div class="row bluetooth marginx">
      <div class="col-5 mt-5">
        <p class="fw-bold bluetooth-p">Categories</p>
        <h1 class="display-5 fw-bold mt-5">Enchance Your <br> Music Experience</h1>
        <div class="time-box d-flex gap-5 text-black text-center mt-5">
          <p> <span class="fw-bold">{{days}}</span>  <br> Days</p>
          <p> <span class="fw-bold">{{hours % 24}}</span>  <br> Hours</p>
          <p> <span class="fw-bold">{{minutes %60}}</span>  <br> Minutes</p>
          <p> <span class="fw-bold">{{seconds % 60}}</span>  <br> Seconds</p>
        </div>
        <button class="btn btn-success btn-lg px-5 py-3 btn-hover my-5">Buy Now</button>
      </div>
      <div class="col-7 text-center">
        <img src="@/assets/bluetootn.png" class="img-fluid b-img mt-5" alt="bluetooth">
      </div>
    </div>
    <!-- Products -->
    <div class="row marginx">
      <div class="mt-5 mb-5">
        <img src="@/assets/retangle.svg" alt="retangle">
        <span class="ms-4 fs-5 fw-bold alpha">Categories</span>
        <div class="d-flex justify-content-between">
          <h1 class="fw-bold mt-3">Explore Our Products</h1>
          <div>
            <button class="btn btn-danger btn-lg btn-view-product">View All Products</button>
          </div>
        </div>
      </div>
      <div class="mt-3 col-3 feature-cart" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.thumbnail" :alt="product.title" class="img-thumbnail" style="height:200px">
          <button class="btn d-grid product-btn">Add To Cart</button>
          <div class="card-body">
            <p v-bold>{{product.title | titleBold}}</p>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points">
          </el-rate>
          </div>
        </div>
      </div>
    </div>
    <!-- Feature -->
    <div class="row marginx">
        <div class="mt-5 mb-5">
        <img src="@/assets/retangle.svg" alt="retangle">
        <span class="ms-4 fs-5 fw-bold alpha">Featured</span>
        <div class="d-flex justify-content-between">
          <h1 class="fw-bold mt-3">New Arrival</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 rounded text-end position-relative " style="background:#000">
          <img src="@/assets/PS5.png" style="padding: 89px 30px 0px 30px" alt="">
          <div class="arrival-content position-absolute">
            <h3>Play Station 5</h3>
            <p>Black and White Version of PS5 <br> coming out on sale</p>
            <a href="#" class="text-white">ShopNow</a>
          </div>
        </div>
        <div class="col-6">
          <div class="text-end rounded overflow-hidden position-relative" style="background:#0D0D0D">
            <div class="text-white position-absolute text-start" style="bottom: 5%; left:5%;">
            <h3>Women’s Collections</h3>
            <p>Featured woman collections that <br> give you another vibe.</p>
            <a href="#" class="text-white">ShopNow</a>
            </div>
            <img src="@/assets/woman-hat.png" alt="woman-hat">
          </div>
          <div class="row mt-5">
            <div class="col-6">
              <div class="text-center position-relative rounded" style="background:#000;height 284px;">
                <img src="@/assets/thread.png" alt="" style="padding-top:51px" class="overflow-hidden">
              <div class="text-white position-absolute text-start" style="bottom: 5%; left:5%;">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <a href="#" class="text-white">ShopNow</a>
              </div>
              </div>
            </div>
            <div class="col-6">
              <div class="text-center position-relative rounded" style="background:#000;height 284px;">
                <img src="@/assets/gucci.png" alt="" style="padding-top:67px" class="overflow-hidden">
              <div class="text-white position-absolute text-start" style="bottom: 5%; left:5%;">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <a href="#" class="text-white">ShopNow</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dekivery Info -->
    <div class="row marginx text-center">
      <div class="col-4">
        <div>
          1
        </div>
      </div>
      <div class="col-4">2</div>
      <div class="col-4">3</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
 
export default {
  name : "HomePage",
   data() {
      return {
        products : [],
        value: 5,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    },
  setup(){
    const days = ref(0);
    const minutes = ref(0);
    const hours = ref(0);
    const seconds = ref(0);
    const launchDate = new Date("30 December 2023");
    
    setInterval(()=>{
      const currentDate = new Date();
      const launchTime = launchDate - currentDate;

      seconds.value = parseInt(launchTime/1000);
      minutes.value = parseInt(seconds.value / 60 );
      hours.value = parseInt(minutes.value / 60);
      days.value = parseInt(hours.value / 24);
    },1000);
    return{days,minutes,hours,seconds}
  },
  created(){
    fetch("https://dummyjson.com/products?limit=8")
    .then(res => res.json())
    .then(json => this.products = json.products)
  },
  filters:{
    titleBold(title){
      return title.toUpperCase()
    }
  },
  directives:{
    'bold':{
      bind(el){
        return (el.style.fontWeight = 700)
      }
    }
  }
}
</script>



<style scoped>
.carousel-item{
  background-color: #000;
  color: #fff;
}
.carousel-control-next, .carousel-control-prev {
    width: 5% !important;
}
ion-icon{
  font-size: 56px;
}
.category-hover:hover,
.category-hover:active {
  background-color: #DB4444;
  color: #fff;
  transition: all .5s;
}
.bluetooth{
  background-color: #000;
  color: #fff;
  margin-top: 100px !important;
  margin-bottom: 100px !important;
  padding: 50px;
}
.bluetooth-p{
  color: #00FF66;
}
.time-box{
  width: 400px;
  height: 60px;

}
.time-box p{
  width: 100% !important;
  background-color: #fff;
  border-radius: 2px;
  border-radius: 10%;
}
.btn-hover:active,
.btn-hover:hover {
  background-color: #00FF66 !important;
}
.b-img{
  width: 568px;
  height: 330px;
}
.btn-view-product {
  background-color: #DB4444 !important;
}
.product-btn{
  color: #fff;
  background: #000000;
  margin: 0 5px;
  opacity: 0;
}
.feature-cart:hover .product-btn{
  opacity: 1;
  transition: all .5s;
}
.product-btn:hover{
  color: #fff;
  background: #000000;
}
.arrival-content{
  color: #fff;
  text-align: start;
  position: absolute;
  z-index: 10;
  top: 2%;
  left: 2%;
}
</style>