var app = new Vue({
  el: '#product1',
  data()  {
   return {
     products: [],
     perPage: 8,
     currentPage: 1,
     piring: 0,
     gelas: 0,
     mangkok: 0,
     sendok: 0,
   };
 },
 methods: {
   setProduct(data) {
     this.products = data;
   }
 },
 mounted() {
   axios
     .get("https://ratu-melamine-be.herokuapp.com/api/produk")
     .then((response) => this.setProduct(response.data.data)
     ).catch(function (error) {
       // handle error
       console.log("Gagal : ",error);
     })
     .then(function () {
       // always executed
     });

   axios
     .get("https://ratu-melamine-be.herokuapp.com/api/produk/kategori/"+1)
     .then((response) => {
       this.piring = response.data.data.length
     }).catch(function (error) {
       // handle error
       console.log("Gagal : ",error);
     })

     axios
     .get("https://ratu-melamine-be.herokuapp.com/api/produk/kategori/"+2)
     .then((response) => {
       this.gelas = response.data.data.length
     }).catch(function (error) {
       // handle error
       console.log("Gagal : ",error);
     })

     axios
     .get("https://ratu-melamine-be.herokuapp.com/api/produk/kategori/"+3)
     .then((response) => {
       this.mangkok = response.data.data.length
     }).catch(function (error) {
       // handle error
       console.log("Gagal : ",error);
     })

     axios
     .get("https://ratu-melamine-be.herokuapp.com/api/produk/kategori/"+4)
     .then((response) => {
       this.sendok = response.data.data.length
     }).catch(function (error) {
       // handle error
       console.log("Gagal : ",error);
     })
 },
})