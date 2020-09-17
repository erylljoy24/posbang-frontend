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
                  <img :src="item.images" class="image" alt="lorem" width="100%" height="120%">
                  <div class="card-body">
                    <h2 class="card-title">{{ item.title }}</h2>
                <!--    <a href="#" class="btn btn-primary" v-link="{path:'ArticleItemComponent'}">Read More &rarr; </a> -->
                    <a class="btn btn-primary" v-on:click.prevent="navigateTo('foods')">Select</a>
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
      items: [
        {
          images: "http://placehold.it/750x300",
          title: "Drinks", 
          postedOn: "January 1, 2017",
          postedBy: "John Doe"
        },
        {
          images: "http://placehold.it/750x300",
          title: "Burgers", 
          postedOn: "January 1, 2017",
          postedBy: "John Doe"
        },
        {
          images: "http://placehold.it/750x300",
          title: "Burger", 
          postedOn: "January 1, 2017",
          postedBy: "John Doe"
        },
        {
          images: "http://placehold.it/750x300",
          title: "Spaghetti", 
          postedOn: "January 1, 2017",
          postedBy: "John Doe"
        },
        {
          images: "http://placehold.it/750x300",
          title: "All in One", 
          postedOn: "January 1, 2017",
          postedBy: "John Doe"
        }
      ]
    }
  },
  methods:{
    navigateTo: function (nav) {
      // Do what you want here.
      // this.saveTheThing()
      console.log(nav)
      this.$router.push({
          path: nav
      })
    }
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
