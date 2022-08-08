import React from "react";
import { Icon, IconProps } from "../Icon";

export type TumblrLineProps = Omit<IconProps, "name">;

export const TumblrLine = (props: TumblrLineProps) => (
  <Icon name="tumblr-line" {...props} />
);
