import * as express from 'express';

const router = express.Router();

router
  .route('/logros')
  .post((req, res) => {
    console.log(req.body);
    res.json({
      demo: 'Test'
    });
  });

export const RouterApi = router;
