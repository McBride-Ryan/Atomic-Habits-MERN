const asyncHandler = require('express-async-handler')

// Get Goals && GET /api/goals && Private
const getGoals = asyncHandler(async (req, res) => {
    if(! req.body.text){
        res.status(400)
        throw new Error("Please add text field")
    }
    res.status(200).json({message: 'Get goal'})
})

// Set Goals && POST /api/goals && Private
const setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Set goal'})
})

// Update Goals && PUT /api/goals/:id && Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// Update Goals && DELETE /api/goals/:id && Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}