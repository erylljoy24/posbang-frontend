<template>
  <div class="main-body">
    <!-- Page Content -->
    <!-- Page Content -->
    <div class="container">

      <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-12">

          <h1 class="my-4">Select A Category
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
                    <!-- <a class="btn btn-primary" style="color:#ffffff" v-on:click.prevent="navigateTo('foods', item.id)">Select</a> -->
                    <router-link class="btn btn-primary" :to="{ name: 'foods', params: {cat_id: item.id } }">Select</router-link>
                  </div>
                </div>
                
              </v-col>
            </v-row>
          </v-container>
          
          <!-- Pagination -->
          <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
              <a class="page-link" href="#">&larr; Older</a>
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">Newer &rarr;</a>
            </li>
          </ul>

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
    
    navigateTo: function (nav, id) {
      // Do what you want here.
      // this.saveTheThing()
      console.log(id)
      this.$router.push({
          path: nav,
          params: { cat_id: id }
      })
    }
  },
  mounted(){
    const axios = require('axios');
    axios.get(`https://pacific-escarpment-86579.herokuapp.com/api/categories`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data;
      
      
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
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
