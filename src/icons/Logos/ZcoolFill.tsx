import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZcoolFillProps = Omit<IconProps, "name">;

export const ZcoolFill = (props: ZcoolFillProps) => (
  <Icon name="zcool-fill" {...props} />
);
