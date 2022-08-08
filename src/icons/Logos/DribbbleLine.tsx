import React from "react";
import { Icon, IconProps } from "../Icon";

export type DribbbleLineProps = Omit<IconProps, "name">;

export const DribbbleLine = (props: DribbbleLineProps) => (
  <Icon name="dribbble-line" {...props} />
);
