import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandCoinLineProps = Omit<IconProps, "name">;

export const HandCoinLine = (props: HandCoinLineProps) => (
  <Icon name="hand-coin-line" {...props} />
);
