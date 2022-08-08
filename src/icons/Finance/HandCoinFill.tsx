import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandCoinFillProps = Omit<IconProps, "name">;

export const HandCoinFill = (props: HandCoinFillProps) => (
  <Icon name="hand-coin-fill" {...props} />
);
