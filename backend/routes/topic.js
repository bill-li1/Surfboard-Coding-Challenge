const router = require("express").Router();
let Topic = require("../models/topic.model");

router.route("/").get((req, res) => {
  Topic.find()
    .then((topics) => res.json(topics))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const image = req.body.image;

  const newTopic = new Topic({
    title,
    description,
    duration,
    image,
  });

  newTopic
    .save()
    .then(() => res.json("Topic added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Topic.findById(req.params.id)
    .then((topic) => res.json(topic))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Topic.findByIdAndDelete(req.params.id)
    .then(() => res.json("Topic deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Topic.findById(req.params.id)
    .then((topic) => {
      topic.title = req.body.title;
      topic.description = req.body.description;
      topic.duration = Number(req.body.duration);
      topic.image = req.body.image;

      topic
        .save()
        .then(() => res.json("Topic updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
