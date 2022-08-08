import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArticleLineProps = Omit<IconProps, "name">;

export const ArticleLine = (props: ArticleLineProps) => (
  <Icon name="article-line" {...props} />
);
