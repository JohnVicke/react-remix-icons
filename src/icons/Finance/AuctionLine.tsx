import React from "react";
import { Icon, IconProps } from "../Icon";

export type AuctionLineProps = Omit<IconProps, "name">;

export const AuctionLine = (props: AuctionLineProps) => (
  <Icon name="auction-line" {...props} />
);
