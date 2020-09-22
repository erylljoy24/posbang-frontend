<template>
  <div class="main-body">
    <!-- Page Content -->
    <!-- Page Content -->
    <div class="container">

      <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-12">

          <h1 class="my-4">Select A Food
            <small></small>
          </h1>

          <!-- Blog Post -->
          <!--   -->
          <v-container fluid>
            <v-row>
              <v-col v-for="item in items" :key="item" cols="6" >
                <div class="card mb-4">
                  <img :src="item.image_url" class="image" alt="lorem" style="height:300px; width:100%">
                  <div class="card-body">
                    <h2 class="card-title">{{ item.name }}</h2>
                <!--    <a href="#" class="btn btn-primary" v-link="{path:'ArticleItemComponent'}">Read More &rarr; </a> -->
                    <button class="btn btn-primary" style="color:#ffffff" v-on:click.prevent="addToCart(item.id, item.name, item.amount, item.cat_id)">Add to Cart</button>
                  </div>
                </div>
                
              </v-col>
            </v-row>
          </v-container>
          
          <!-- Pagination -->

        </div>

        <!-- Sidebar Widgets Column -->
        

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
      </div>
      <!-- /.container -->
    </footer>

  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods:{
    addToCart: function (id, name, amount, cat_id) {
      
      const data = {
          name: name,
          quantity: 1,
          amount: amount,
          cat_id: cat_id,
          menu_id: id
      }
      const axios = require('axios');
        axios.post(`https://pacific-escarpment-86579.herokuapp.com/api/add/cart`,data)
        .then(response => {
          // JSON responses are automatically parsed.
          alert("successfully added!")
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted(){
    const axios = require('axios');
    axios.get(`https://pacific-escarpment-86579.herokuapp.com/api/menu/`+this.$route.params.cat_id)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response)
      this.items = response.data;
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-body{
  margin-top: 35px;
},
.container{
  text-align: justify;
},
.no-radius{
  border-radius: 0px;
}
</style>
