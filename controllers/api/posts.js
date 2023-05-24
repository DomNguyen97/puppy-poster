const Post = require('../../models/post');
const User = require('../../models/user');

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  getPostById,
  getUser,
  updatePost
};

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().populate('user');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

// Create Post
async function createPost(req, res) {
  try {
    const { content,location, imageUrl } = req.body;
    const userId = req.user._id;

    const newPost = new Post({
      content,
      location,
      imageUrl,
      user: userId
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
async function updateDrink(req, res) {
  // console.log("req", req.body)
  try {

    const { name, ingredients, instructions, imageUrl, location, _id } = req.body;
    const drinkId = _id;
    // console.log("drinkId", drinkId); 
    // Find the drink by ID"
    const drink = await Drink.findByIdAndUpdate(drinkId, {
      name,
      ingredients,
      instructions,
      imageUrl,
      location,
    }, { new: true });
    // console.log('drink', drink)
    if (!drink) {
      return res.status(404).json({ error: 'Drink not found' });
    }

    res.json(drink);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update drink' });
  }
};