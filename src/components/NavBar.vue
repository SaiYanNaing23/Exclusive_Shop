<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <div class="container-fluid mt-2">
        <a class="navbar-brand fw-bold ms-5 fs-4" href="#">Exclusive</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto fs-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign Up</a>
        </li>
      </ul>
          <div class="me-5">
        <a href="#"><ion-icon name="heart-outline" size="small" class="text-black d-{inline-block} mx-3"></ion-icon></a>
        <a href="#"><ion-icon name="cart-outline" size="small" class="text-black"></ion-icon></a>
    </div>
    </div>

  </div>
</nav>

</template>

<script>
export default {
    name : "NavBar",
}
</script>

<style>
.bg-light {
    --bs-bg-opacity: 0 !important;

}
</style>