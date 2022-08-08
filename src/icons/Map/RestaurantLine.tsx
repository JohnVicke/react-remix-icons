import React from "react";
import { Icon, IconProps } from "../Icon";

export type RestaurantLineProps = Omit<IconProps, "name">;

export const RestaurantLine = (props: RestaurantLineProps) => (
  <Icon name="restaurant-line" {...props} />
);
