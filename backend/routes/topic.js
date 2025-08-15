const express = require('express');

const Topic = require('../models/TopicModel');

const router = express.Router();

// GET route to fetch topics
router.get('/api/topics', async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
});

// POST route to create a topic
router.post('/api/topics', async (req, res) => {
  const { title, message } = req.body;
  const newTopic = new Topic({ title, message });
  await newTopic.save();
  res.json(newTopic);
});

module.exports = router;
