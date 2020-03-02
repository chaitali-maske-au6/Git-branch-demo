module.exports = function(req, res, next){
    if (req.query.name === 'woodpeaker') return next();
    return res.send("You are not allowed")
};