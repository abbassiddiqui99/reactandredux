/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route } from "react-router";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
