var dataURL = 'https://jsonplaceholder.typicode.com/posts?_limit=20';

Vue.component('paginated-list', {
  data() {
    return {
      pageNumber: 0
    }
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 6
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    selectPage(page) {
      this.pageNumber = page;
    }
  },
  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData
        .slice(start, end);
    }
  },
  template: `<div>
           
           <div v-for="p in paginatedData">
           <div class="article col">
               <h3 class="title">{{p.title}}</h3>
               <p class="body">{{p.body}}</p>
           </div>
           </div>
<div class="pagination">
           <div v-for="a in pageCount-1">
           <button class="pagination__button" 
            @click="selectPage(a)"
            >{{a}}</button>
           </div></div>
          
          <div class="pagination">
          <button class="pagination__button"
              :disabled="pageNumber === 0" 
              @click="prevPage">
              &#60;&#60;
          </button>
            <button class="pagination__button" 
            @click="selectPage(1)"
            >1</button>
            <button class="pagination__button"
            @click="selectPage(2)"
            >2</button>
            <button class="pagination__button"
            @click="selectPage(3)"
            >3</button>
            <button class="pagination__button"
            @click="selectPage(4)"
            >4</button>
            <button class="pagination__button"
              :disabled="pageNumber >= pageCount -1" 
              @click="nextPage">
              &#62;&#62;
          </button>
        </div>

        </div>
         
         
`
});


var app = new Vue({
  el: "#app",
  data: {
    newtitle: '',
    newbody: '',
    title: '',
    body: '',
    pageNumber: 0,
    articles: [],


  },
  methods: {
    addArticle(newtitle, newbody) {
      if(this.title !='' && this.body !='')
      app.articles.push({
        title: newtitle,
        body: newbody
      });
      

      this.title = ''
      this.body = ''
    },


  },

  //Загрузка json
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function (data) {
      self.articles = data;
    });
  },


});
