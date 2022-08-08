import React from "react";
import { Icon, IconProps } from "../Icon";

export type InkBottleFillProps = Omit<IconProps, "name">;

export const InkBottleFill = (props: InkBottleFillProps) => (
  <Icon name="ink-bottle-fill" {...props} />
);
