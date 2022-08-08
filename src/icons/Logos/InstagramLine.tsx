import React from "react";
import { Icon, IconProps } from "../Icon";

export type InstagramLineProps = Omit<IconProps, "name">;

export const InstagramLine = (props: InstagramLineProps) => (
  <Icon name="instagram-line" {...props} />
);
