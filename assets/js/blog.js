function request() {
  return $.ajax({
    type : 'GET',
    dataType : 'json',
    cache : 'false',
    url : "blogPosts.json",
    success : function(response) {
      $('#light-pagination').append('<div class="row">');
      $.each(response.posts, function(key, value){
        console.log(value.postTitle);
        $('#light-pagination').append('<div class="col-lg-12"><p><large><strong>' + value.postTitle + '</strong></large><br><em>' + value.postDate + '</em><br>' + value.postContent + '<br><br><br><br></p></div>');
      });
      $('#light-pagination').append('</div>');
    }
  })
}
$(document).ready(request);