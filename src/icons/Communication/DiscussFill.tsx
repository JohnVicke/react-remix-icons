import React from "react";
import { Icon, IconProps } from "../Icon";

export type DiscussFillProps = Omit<IconProps, "name">;

export const DiscussFill = (props: DiscussFillProps) => (
  <Icon name="discuss-fill" {...props} />
);
