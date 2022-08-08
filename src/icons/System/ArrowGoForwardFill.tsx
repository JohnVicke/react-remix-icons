import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowGoForwardFillProps = Omit<IconProps, "name">;

export const ArrowGoForwardFill = (props: ArrowGoForwardFillProps) => (
  <Icon name="arrow-go-forward-fill" {...props} />
);
