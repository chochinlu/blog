import React from 'react';
import { Card } from 'rebass';

const ArticleBlock = ({ article }) => (
  <Card m={2} border={1} px={2} py={5}>
    <h2>{article.title}</h2>
    <h3>{article.updated_at}</h3>
    <h3>Created At {article.created_at}</h3>
    <div>{article.body}</div>
    <button>閱讀更多</button>
  </Card>
);

export default ArticleBlock;
