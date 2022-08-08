import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoubanLineProps = Omit<IconProps, "name">;

export const DoubanLine = (props: DoubanLineProps) => (
  <Icon name="douban-line" {...props} />
);
