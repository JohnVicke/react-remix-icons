import React from "react";
import { Icon, IconProps } from "../Icon";

export type AuctionFillProps = Omit<IconProps, "name">;

export const AuctionFill = (props: AuctionFillProps) => (
  <Icon name="auction-fill" {...props} />
);
