import React from "react";
import { Icon, IconProps } from "../Icon";

export type WechatPayLineProps = Omit<IconProps, "name">;

export const WechatPayLine = (props: WechatPayLineProps) => (
  <Icon name="wechat-pay-line" {...props} />
);
