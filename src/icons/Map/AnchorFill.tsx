import React from "react";
import { Icon, IconProps } from "../Icon";

export type AnchorFillProps = Omit<IconProps, "name">;

export const AnchorFill = (props: AnchorFillProps) => (
  <Icon name="anchor-fill" {...props} />
);
