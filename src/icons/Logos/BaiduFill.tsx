import React from "react";
import { Icon, IconProps } from "../Icon";

export type BaiduFillProps = Omit<IconProps, "name">;

export const BaiduFill = (props: BaiduFillProps) => (
  <Icon name="baidu-fill" {...props} />
);
