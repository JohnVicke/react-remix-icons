import React from "react";
import { Icon, IconProps } from "../Icon";

export type BitCoinLineProps = Omit<IconProps, "name">;

export const BitCoinLine = (props: BitCoinLineProps) => (
  <Icon name="bit-coin-line" {...props} />
);
