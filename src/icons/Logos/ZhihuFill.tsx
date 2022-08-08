import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZhihuFillProps = Omit<IconProps, "name">;

export const ZhihuFill = (props: ZhihuFillProps) => (
  <Icon name="zhihu-fill" {...props} />
);
