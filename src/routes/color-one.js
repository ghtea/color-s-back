import express from 'express';

//import queryString from 'query-string';

import ColorOne from '../models/ColorOne';

var router = express.Router();



// 
router.get('/:idColorOne', async(req, res, next) => {

  try {

    const filter = {
      _id: req.params.idColorOne
    };

  ColorOne.findOne(filter, (err, founColorOne) => {
      if (err) return res.status(500).json({
        error: err
      });
      else if (!founColorOne) {
        return res.status(404).json({
          error: 'ColorOne not found'
        });
      } else {
        res.json(founColorOne);
      }
    });

  } catch (error) {
    next(error)
  }

});





router.get('/', (req, res) => {


  const query = req.query;

  /*
  const filterAuthor = (query.author) ? {
    author: query.author
  } : {};
  */

  const filter = {

    $and: [

      
    ]

  };
  
  
  let pipeline = [{
    "$match": filter
  }]


  ColorOne.aggregate(pipeline, (err, listColorOne) => {
    if (err) return res.status(500).send({
      error: 'database failure'
    });
    res.json(listColorOne);
  })

});





router.post('/', async(req, res, next) => {

  try {

    const date = Date.now();

    const colorAssignmentReq = req.body;

    let mongoColorOne = new ColorOne({
      
      ...colorAssignmentReq
      
      , created: date
      , updated: date
        
    });

    await mongoColorOne.save();


    res.send("new ColorOne has been created!");

  } catch (error) {
    next(error)
  }

});








//UPDATE
router.put('/:idColorOne', async(req, res, next) => {

  try {

    const filter = {
      _id: req.params.idColorOne
    };

    const date = Date.now();



    const colorAssignmentReq = req.body;



    let update = {

      ...colorAssignmentReq
      
      , updated: date
    };


    await ColorOne.updateOne(filter, update);

    res.send("The ColorOne has benn updated!");

  } catch (error) {
    next(error)
  }

});






// DELETE Comp
router.delete('/:idColorOne', async(req, res, next) => {

  try {

    try {
      const filter = {
        _id: req.params.idColorOne
      };
      await ColorOne.deleteOne(filter);


      res.send("The ColorOne has been deleted");

    } catch (error) {
      console.log(error);
      res.status(500).send(error); // 여기선 내가 잘 모르는 에러라 뭘 할수가...   나중에 알수없는 에러라고 표시하자...
      return;
    }

  } catch (error) {
    next(error)
  }

});


module.exports = router;