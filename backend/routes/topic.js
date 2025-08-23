const express = require('express');

const Topic = require('../models/TopicModel');

const router = express.Router();

// GET route to fetch topics
router.get('/', async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
});

/*
// POST route to create a topic
router.post('/', async (req, res) => {
  const { title, message } = req.body;
  const newTopic = new Topic({ title, message });
  await newTopic.save();
  res.json(newTopic);
});

*/
//api/topics
router.post('/', async (req, res) => {
  const { title, message, author } = req.body;
  const newTopic = new Topic({
    title,
    posts: [{ message, author }],
  });
  await newTopic.save();
  res.json(newTopic);
});

// Get one topic by ID
router.get('/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ error: 'Topic not found' });
    res.json(topic);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

//api/topics/:id/posts
router.post('/:id/posts', async (req, res) => {
  const { message, author } = req.body;
  const topic = await Topic.findById(req.params.id);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });

  console.log('POST body:', req.body);

  //console.log('message', message);
  //console.log('author', author);

  topic.posts.push({ message, author });
  await topic.save();

  res.json(topic);
});

///api/topics/:id
router.get('/:id', async (req, res) => {
  const topic = await Topic.findById(req.params.id);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });
  res.json(topic);
});

/*
router.get('/test', (req, res) => {
  res.send('Topics route is alive');
}); */

router.get('/by-email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    console.log('EMAIL PARAM:', email);

    const topics = await Topic.find({ 'posts.author': email });
    console.log('TOPICS FOUND:', topics.length);

    let userPosts = [];
    topics.forEach((topic) => {
      const filteredPosts = topic.posts.filter((post) => post.author === email);
      userPosts = userPosts.concat(
        filteredPosts.map((p) => ({
          topicId: topic._id,
          topicTitle: topic.title,
          ...p.toObject(),
        }))
      );
    });

    console.log('USER POSTS:', userPosts.length);
    res.json(userPosts);
  } catch (err) {
    console.error('Error in /:email route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
