import express from 'express';
import { create, list } from '../controllers/articleController';
import authorized from '../middlewares/authorized';
import validateSchema from '../middlewares/validateSchema';
import { createArticleRequestSchema } from '../schemas/request/article';

const router = express.Router();

router.post(
  '/',
  [authorized, validateSchema(createArticleRequestSchema)],
  create,
);

router.get('/', list);

export default router;
