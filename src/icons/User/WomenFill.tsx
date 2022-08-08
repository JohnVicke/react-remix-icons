import React from "react";
import { Icon, IconProps } from "../Icon";

export type WomenFillProps = Omit<IconProps, "name">;

export const WomenFill = (props: WomenFillProps) => (
  <Icon name="women-fill" {...props} />
);
