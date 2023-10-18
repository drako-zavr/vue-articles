var dataURL = 'https://jsonplaceholder.typicode.com/posts?_limit=20';
var app =new Vue({
    el: "#app",
    data: {
        
        // userId:1,
        // id:2,
        
       
        pageNumber: 0,
        articles: [],
        newtitle:'',
        newbody:''

    }, 
    methods:{
        // пагинация
        nextPage(){
            this.pageNumber++;
         },
         prevPage(){
            if(this.pageNumber!=0){
                this.pageNumber--;
            }
         },
         //Добвление статей
        addArticle(){
            app.articles.push({title:	"AAAAAA",
            body:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        } )
        }
    },
    //Загрузка json
    mounted() { // when the Vue app is booted up, this is run automatically.
        var self = this // create a closure to access component in the callback below
        $.getJSON(dataURL, function(data) {
          self.articles = data;
        });
      }
    

    


});
