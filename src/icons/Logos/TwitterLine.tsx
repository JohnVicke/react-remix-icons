import React from "react";
import { Icon, IconProps } from "../Icon";

export type TwitterLineProps = Omit<IconProps, "name">;

export const TwitterLine = (props: TwitterLineProps) => (
  <Icon name="twitter-line" {...props} />
);
