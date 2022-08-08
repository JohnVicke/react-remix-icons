import React from "react";
import { Icon, IconProps } from "../Icon";

export type DvdFillProps = Omit<IconProps, "name">;

export const DvdFill = (props: DvdFillProps) => (
  <Icon name="dvd-fill" {...props} />
);
