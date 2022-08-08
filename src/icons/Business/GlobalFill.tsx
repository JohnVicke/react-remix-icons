import React from "react";
import { Icon, IconProps } from "../Icon";

export type GlobalFillProps = Omit<IconProps, "name">;

export const GlobalFill = (props: GlobalFillProps) => (
  <Icon name="global-fill" {...props} />
);
