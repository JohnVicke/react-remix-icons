import React from "react";
import { Icon, IconProps } from "../Icon";

export type RestaurantFillProps = Omit<IconProps, "name">;

export const RestaurantFill = (props: RestaurantFillProps) => (
  <Icon name="restaurant-fill" {...props} />
);
