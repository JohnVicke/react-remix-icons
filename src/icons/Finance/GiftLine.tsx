import React from "react";
import { Icon, IconProps } from "../Icon";

export type GiftLineProps = Omit<IconProps, "name">;

export const GiftLine = (props: GiftLineProps) => (
  <Icon name="gift-line" {...props} />
);
