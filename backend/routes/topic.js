const express = require('express');

const Topic = require('../models/TopicModel');

const router = express.Router();

// GET route to fetch topics
router.get('/', async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
});

// POST route to create a topic
router.post('/', async (req, res) => {
  const { title, message } = req.body;
  const newTopic = new Topic({ title, message });
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

module.exports = router;
