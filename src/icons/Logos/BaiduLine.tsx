import React from "react";
import { Icon, IconProps } from "../Icon";

export type BaiduLineProps = Omit<IconProps, "name">;

export const BaiduLine = (props: BaiduLineProps) => (
  <Icon name="baidu-line" {...props} />
);
