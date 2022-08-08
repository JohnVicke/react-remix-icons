import React from "react";
import { Icon, IconProps } from "../Icon";

export type DvdLineProps = Omit<IconProps, "name">;

export const DvdLine = (props: DvdLineProps) => (
  <Icon name="dvd-line" {...props} />
);
