import React from "react";
import { Icon, IconProps } from "../Icon";

export type WechatLineProps = Omit<IconProps, "name">;

export const WechatLine = (props: WechatLineProps) => (
  <Icon name="wechat-line" {...props} />
);
