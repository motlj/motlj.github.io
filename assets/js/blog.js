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
        $('#blog').append('<div class="col-lg-12"><p><large><strong>' + value.postTitle + '</strong></large><br><em>' + value.postDate + '</em><br>' + value.postContent + '<br><br><br><br></p></div>');
      });
      $('#blog').append('</div>');
    }
  })
}
$(document).ready(request);