import React from "react";
import { Icon, IconProps } from "../Icon";

export type WechatFillProps = Omit<IconProps, "name">;

export const WechatFill = (props: WechatFillProps) => (
  <Icon name="wechat-fill" {...props} />
);
