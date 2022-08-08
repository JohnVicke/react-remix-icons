import React from "react";
import { Icon, IconProps } from "../Icon";

export type CoinsLineProps = Omit<IconProps, "name">;

export const CoinsLine = (props: CoinsLineProps) => (
  <Icon name="coins-line" {...props} />
);
