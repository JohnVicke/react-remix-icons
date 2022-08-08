import React from "react";
import { Icon, IconProps } from "../Icon";

export type FridgeLineProps = Omit<IconProps, "name">;

export const FridgeLine = (props: FridgeLineProps) => (
  <Icon name="fridge-line" {...props} />
);
