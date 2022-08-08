import React from "react";
import { Icon, IconProps } from "../Icon";

export type BitCoinFillProps = Omit<IconProps, "name">;

export const BitCoinFill = (props: BitCoinFillProps) => (
  <Icon name="bit-coin-fill" {...props} />
);
