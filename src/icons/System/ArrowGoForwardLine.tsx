import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowGoForwardLineProps = Omit<IconProps, "name">;

export const ArrowGoForwardLine = (props: ArrowGoForwardLineProps) => (
  <Icon name="arrow-go-forward-line" {...props} />
);
