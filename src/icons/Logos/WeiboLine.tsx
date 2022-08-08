import React from "react";
import { Icon, IconProps } from "../Icon";

export type WeiboLineProps = Omit<IconProps, "name">;

export const WeiboLine = (props: WeiboLineProps) => (
  <Icon name="weibo-line" {...props} />
);
