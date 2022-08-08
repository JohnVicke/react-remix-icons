import React from "react";
import { Icon, IconProps } from "../Icon";

export type XingFillProps = Omit<IconProps, "name">;

export const XingFill = (props: XingFillProps) => (
  <Icon name="xing-fill" {...props} />
);
