import React from "react";
import { Icon, IconProps } from "../Icon";

export type TumblrFillProps = Omit<IconProps, "name">;

export const TumblrFill = (props: TumblrFillProps) => (
  <Icon name="tumblr-fill" {...props} />
);
