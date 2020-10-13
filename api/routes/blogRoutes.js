'use strict';
module.exports = function(app) {
    var blog_backend = require('../controllers/blogController');

  // blog Routes
  app.route('/posts')
    .get(blog_backend.list_all_posts)
    .post(blog_backend.create_a_post);

  app.route('/posts/:postId')
    .get(blog_backend.read_a_post)
    .put(blog_backend.update_a_post)
    .patch(blog_backend.patch_a_post)
    .delete(blog_backend.delete_a_post);

};