import React from "react";
import { Icon, IconProps } from "../Icon";

export type GiftFillProps = Omit<IconProps, "name">;

export const GiftFill = (props: GiftFillProps) => (
  <Icon name="gift-fill" {...props} />
);
