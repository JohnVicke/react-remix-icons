import React from "react";
import { Icon, IconProps } from "../Icon";

export type AnchorLineProps = Omit<IconProps, "name">;

export const AnchorLine = (props: AnchorLineProps) => (
  <Icon name="anchor-line" {...props} />
);
