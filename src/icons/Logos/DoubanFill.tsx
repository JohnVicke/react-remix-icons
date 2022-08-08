import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoubanFillProps = Omit<IconProps, "name">;

export const DoubanFill = (props: DoubanFillProps) => (
  <Icon name="douban-fill" {...props} />
);
