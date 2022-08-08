import React from "react";
import { Icon, IconProps } from "../Icon";

export type RedditFillProps = Omit<IconProps, "name">;

export const RedditFill = (props: RedditFillProps) => (
  <Icon name="reddit-fill" {...props} />
);
