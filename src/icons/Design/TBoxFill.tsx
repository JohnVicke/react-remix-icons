import React from "react";
import { Icon, IconProps } from "../Icon";

export type TBoxFillProps = Omit<IconProps, "name">;

export const TBoxFill = (props: TBoxFillProps) => (
  <Icon name="t-box-fill" {...props} />
);
