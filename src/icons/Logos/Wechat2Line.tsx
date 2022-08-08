import React from "react";
import { Icon, IconProps } from "../Icon";

export type Wechat2LineProps = Omit<IconProps, "name">;

export const Wechat2Line = (props: Wechat2LineProps) => (
  <Icon name="wechat-2-line" {...props} />
);
