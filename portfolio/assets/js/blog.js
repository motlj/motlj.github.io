    function request() {
      return $.ajax({
        type : 'GET',
        dataType : 'json',
        cache : 'false',
        url : "blogPosts.json",
        success : function(response) {
          $('#blog').append('<div class="row">');
          $.each(response.posts, function(key, value){
            console.log(value.postTitle);
            $('#blog').append('<div class="col-lg-12"><p class="postTitle">' + value.postTitle + '</p><p class="postDate">' + value.postDate + '</p><p class="postContent">' + value.postContent + '</p><hr class="featurette-divider"></div>');
          });
          $('#blog').append('</div>');
        }
      })
    }
    $(document).ready(request);