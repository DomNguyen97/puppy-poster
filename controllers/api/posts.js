const Post = require('../../models/post');
const User = require('../../models/user');

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  getPostById,
  getUser,
  new: newPost,
  updatePost
};

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find({}).populate('user');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

function newPost(req, res){
  res.render("posts/new")
}


// // Create Post
//  function createPost(req, res) {
//    req.body.user = req.user._id;
//    let post =  new Post({
//     userName: req.body.userName,
//     content: req.body.content,
//     location: req.body.location,
//     imageUrl: req.body.imageUrl,
//     user: req.body.user,
//    })
//    console.log(post);
//    post.save(function(err) {
//     if (err) {
//       console.log(err)
//       return res.redirect("/posts/new")
//     }
//    })

//  }
// Create Post
async function createPost( req, res ) {
  console.log('hit create controller')
  try {
    const { userName ,content,location, imageUrl } = req.body;

    const newPost = new Post({
      content,
      location,
      imageUrl,
      userName, 
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Post' });
  }
};

// Delete Post
async function deletePost(req, res) {
  try {
    const PostId = req.params.id;

    
    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

// Obtain Post ID
async function getPostById(req, res) {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId).populate('user');

    if (!post) {
      return res.status(404).json({ error: 'post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get post' });
  }
}

// Controller function to get posts for the logged in user
async function getUser(req, res) {

  const userPosts = await Post.find({ user: req.user._id });
  res.json(userPosts);
}

// Controller function to update a drink
async function updatePost(req, res) {
  // console.log("req", req.body)
  try {

    const { userName, content, location, imageUrl } = req.body;
    const postId = _id;
    const post = await Post.findByIdAndUpdate(postId, {
      userName,
      content,
      location,
      imageUrl,
    }, { new: true });
    if (!post) {
      return res.status(404).json({ error: 'post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update drink' });
  }
};