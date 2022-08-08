import React from "react";
import { Icon, IconProps } from "../Icon";

export type WeiboFillProps = Omit<IconProps, "name">;

export const WeiboFill = (props: WeiboFillProps) => (
  <Icon name="weibo-fill" {...props} />
);
