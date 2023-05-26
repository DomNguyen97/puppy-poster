const Post = require('../../models/post');
const User = require('../../models/user');

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  getPostById,
  getUser,
  new: newPost,
  // updatePost
};

async function getAllPosts(_, res) {
  try {
    // const posts = await Post.find({}).populate({
    //   path: 'user',
    //   model: 'User',
    // });
    // res.json(posts);
    res.json(await Post.find({}))
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

function newPost(req, res){
  res.render("posts/new")
}


// create
async function createPost(req, res) {
  try {
    const { content, location, imageUrl, user } = req.body;

    const newPost = new Post({
      user,
      content,
      location,
      imageUrl,
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
    const postId = req.params.id;

    
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

// function deletePost(req, res) {
//   const id = req.params.id

//   Post.findOne({_id: id})
//   .then(foundPost => {
//     return Post.deleteOne(id)
//   }) 
//   .catch(error => console.log(error))
  
//   res.send("itemDelete")
// }





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

// // Controller function to update a drink
// async function updatePost(req, res) {
//   // console.log("req", req.body)
//   try {

//     const { userName, content, location, imageUrl } = req.body;
//     const postId = _id;
//     const post = await Post.findByIdAndUpdate(postId, {
//       userName,
//       content,
//       location,
//       imageUrl,
//     }, { new: true });
//     if (!post) {
//       return res.status(404).json({ error: 'post not found' });
//     }

//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to update drink' });
//   }
// };