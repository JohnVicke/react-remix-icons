import React from "react";
import { Icon, IconProps } from "../Icon";

export type Wechat2FillProps = Omit<IconProps, "name">;

export const Wechat2Fill = (props: Wechat2FillProps) => (
  <Icon name="wechat-2-fill" {...props} />
);
