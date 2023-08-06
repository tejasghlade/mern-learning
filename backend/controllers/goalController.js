const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  //   res.status(200).json({ message: "Get Goals" });
  res.status(200).json(goals);
});

const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({message : 'Please add a text field'})
    res.status(400);
    throw new Error("Please add a text field");
  }

  console.log(req.body.text)
  const goal = await Goal.create({
    text : req.body.text
  })
  res.status(200).json({ message : goal});
});

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
  if (!goal) {
    // res.status(400).json({message : 'Please add a text field'})
    res.status(400);
    throw new Error("Goal not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new : true})
//   res.status(200).json({ message: `Update Goals ${req.params.id}` });
  res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      // res.status(400).json({message : 'Please add a text field'})
      res.status(400);
      throw new Error("Goal not Found");
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
//   res.status(200).json({ message: `Delete Goals ${req.params.id}` });
res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
};
