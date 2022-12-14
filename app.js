const express = require("express");
const {
  getTopics,
  getArticleId,
  patchVotes,
  getUsers,
  getArticles,
  postArticleComment,
  getArticleComments,
  deleteComment,
  getApi,
} = require("./controllers/controllers");
const {
  psqlErrorHandler,
  unhandledErrors,
  handleCustomErrors,
} = require("./errors/error-handler");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles/:article_id", getArticleId);

app.patch("/api/articles/:article_id", patchVotes);

app.get("/api/users", getUsers);

app.get("/api/articles", getArticles);

app.post("/api/articles/:article_id/comments", postArticleComment);

app.get("/api/articles/:article_id/comments", getArticleComments);

app.delete("/api/comments/:comment_id", deleteComment);

app.get("/api", getApi);

//Error Handlers
app.use(psqlErrorHandler);
app.use(handleCustomErrors);
app.use(unhandledErrors);

module.exports = app;
