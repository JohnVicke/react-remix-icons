import React from "react";
import { Icon, IconProps } from "../Icon";

export type Restaurant2LineProps = Omit<IconProps, "name">;

export const Restaurant2Line = (props: Restaurant2LineProps) => (
  <Icon name="restaurant-2-line" {...props} />
);
