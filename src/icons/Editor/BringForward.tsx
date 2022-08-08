import React from "react";
import { Icon, IconProps } from "../Icon";

export type BringForwardProps = Omit<IconProps, "name">;

export const BringForward = (props: BringForwardProps) => (
  <Icon name="bring-forward" {...props} />
);
