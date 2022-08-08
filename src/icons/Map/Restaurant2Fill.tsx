import React from "react";
import { Icon, IconProps } from "../Icon";

export type Restaurant2FillProps = Omit<IconProps, "name">;

export const Restaurant2Fill = (props: Restaurant2FillProps) => (
  <Icon name="restaurant-2-fill" {...props} />
);
