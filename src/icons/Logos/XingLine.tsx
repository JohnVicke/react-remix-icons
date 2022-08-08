import React from "react";
import { Icon, IconProps } from "../Icon";

export type XingLineProps = Omit<IconProps, "name">;

export const XingLine = (props: XingLineProps) => (
  <Icon name="xing-line" {...props} />
);
