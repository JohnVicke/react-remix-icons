import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubscriptProps = Omit<IconProps, "name">;

export const Subscript = (props: SubscriptProps) => (
  <Icon name="subscript" {...props} />
);
