import React from "react";
import { Icon, IconProps } from "../Icon";

export type WifiFillProps = Omit<IconProps, "name">;

export const WifiFill = (props: WifiFillProps) => (
  <Icon name="wifi-fill" {...props} />
);
