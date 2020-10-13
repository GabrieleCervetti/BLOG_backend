'use strict';
var mongoose = require('mongoose'),
	Post = mongoose.model('Posts');

exports.list_all_posts = function(req, res) {
	var query = req.query;
	Post.find(query, {}, function(err, post) {
		if (err)
			res.send(err);
		res.json(post);
	}).sort({'featured': -1});
};

exports.create_a_post = function(req, res) {
	var new_post = new Post(req.body);
	new_post.save(function(err, post) {
      if (err)
        res.send(err);
      res.json(post);
    });
 };

exports.read_a_post = function(req, res) {
    Post.findById(req.params.postId, function(err, post) {
      if (err)
        res.send(err);
      res.json(post);
    });
 };


exports.update_a_post = function(req, res) {
    var query = req.query;
    Post.findOneAndUpdate({_id: req.params.postId}, query, {new: true}, function(err, task) {
		if (err)
			res.send(err);
		res.json(post);
    });
};


exports.patch_a_post = function(req, res) {
    Post.update({_id: req.params.postId}, { $set: { "public": false } }, {new: true}, function(err, post) {
      if (err)
        res.send(err);
      res.json(post);
    });
};

exports.delete_a_post = function(req, res) {
    Post.remove({_id: req.params.postId}, function(err, post) {
		if (err)
			res.send(err);
		res.json({ message: 'Post successfully deleted' });
    });
};