import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArticleFillProps = Omit<IconProps, "name">;

export const ArticleFill = (props: ArticleFillProps) => (
  <Icon name="article-fill" {...props} />
);
