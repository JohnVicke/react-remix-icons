import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZhihuLineProps = Omit<IconProps, "name">;

export const ZhihuLine = (props: ZhihuLineProps) => (
  <Icon name="zhihu-line" {...props} />
);
