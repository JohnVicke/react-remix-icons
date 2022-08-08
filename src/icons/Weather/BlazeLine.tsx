import React from "react";
import { Icon, IconProps } from "../Icon";

export type BlazeLineProps = Omit<IconProps, "name">;

export const BlazeLine = (props: BlazeLineProps) => (
  <Icon name="blaze-line" {...props} />
);
