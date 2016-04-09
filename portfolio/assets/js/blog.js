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
            $('#blog').append('<div class="col-lg-12"><h3>' + value.postTitle + '</h3><h5>' + value.postDate + '</h5><p>' + value.postContent + '</p><hr class="featurette-divider"></div>');
          });
          $('#blog').append('</div>');
        }
      })
    }
    $(document).ready(request);