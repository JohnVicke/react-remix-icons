import React from "react";
import { Icon, IconProps } from "../Icon";

export type TBoxLineProps = Omit<IconProps, "name">;

export const TBoxLine = (props: TBoxLineProps) => (
  <Icon name="t-box-line" {...props} />
);
