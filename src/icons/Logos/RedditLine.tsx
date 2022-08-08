import React from "react";
import { Icon, IconProps } from "../Icon";

export type RedditLineProps = Omit<IconProps, "name">;

export const RedditLine = (props: RedditLineProps) => (
  <Icon name="reddit-line" {...props} />
);
