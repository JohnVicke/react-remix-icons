import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZcoolLineProps = Omit<IconProps, "name">;

export const ZcoolLine = (props: ZcoolLineProps) => (
  <Icon name="zcool-line" {...props} />
);
