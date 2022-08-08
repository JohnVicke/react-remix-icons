import React from "react";
import { Icon, IconProps } from "../Icon";

export type WechatPayFillProps = Omit<IconProps, "name">;

export const WechatPayFill = (props: WechatPayFillProps) => (
  <Icon name="wechat-pay-fill" {...props} />
);
