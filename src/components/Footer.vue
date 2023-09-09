<template>
  <footer>
    <div class="container">
        <div class="row">
            <div class="col-3 position-relative">
                <h3 class="mb-3">Exclusive</h3>
                <h4 class="mb-4">Subscribe</h4>
                <p>Get 10% off your first order</p>
                <form class="overflow-hidden">
                <input type="text" placeholder="Enter Your Email">
                <button><ion-icon name="chevron-forward-outline" style="color:#fff" size="large"></ion-icon></button>
                </form>
            </div>
            <div class="col-2">
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div class="col-2">
                <h4>Account</h4>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div class="col-2">
                <h4>Quick Link</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div class="col-3">
                <h4>Download App</h4>
                <p>Save $3 with App New User Only</p>
                <div class="row">
                    <div class="col-5">
                        <img src="@/assets/QR-code.png" width="100%" alt="">
                    </div>
                    <div class="col-7">
                        <img src="@/assets/playstore.png" width="80%" alt="">
                        <img src="@/assets/appstore.png" width="80%" alt="" style="margin-top:30px">
                    </div>
                </div>
                <ul class="social-icon">
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-tiktok"></ion-icon></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="text-center" style="margin-top:90px;border-top:1px solid rgba(136, 140, 135); padding-top: 20px;">
        <p style="margin-bottom:0;padding-bottom:10px">&copy;Copyright Rimel 2022. All right reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
    name: "FooterVue",
}
</script>

<style scoped>
input{
    width: 70%;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #000;
    border: 1px solid #fff;
    color: #fafafa;
    outline: none;
}
button{
    background-color: #000;
    border: none;
    position: absolute;
    right: 20%;
}
.social-icon{
    list-style: none;
    display: flex;
    display: flex;
    justify-content: space-between;
    margin-left: -10%;
    margin-top: 20px;
}
.social-icon li ion-icon{
    font-size: 24px;
    cursor: pointer;
}
</style>