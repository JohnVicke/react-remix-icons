import React from "react";
import { Icon, IconProps } from "../Icon";

export type InstagramFillProps = Omit<IconProps, "name">;

export const InstagramFill = (props: InstagramFillProps) => (
  <Icon name="instagram-fill" {...props} />
);
