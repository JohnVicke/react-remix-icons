import React from "react";
import { Icon, IconProps } from "../Icon";

export type DivideFillProps = Omit<IconProps, "name">;

export const DivideFill = (props: DivideFillProps) => (
  <Icon name="divide-fill" {...props} />
);
