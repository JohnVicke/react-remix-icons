import React from "react";
import { Icon, IconProps } from "../Icon";

export type FridgeFillProps = Omit<IconProps, "name">;

export const FridgeFill = (props: FridgeFillProps) => (
  <Icon name="fridge-fill" {...props} />
);
