import React from "react";
import { Icon, IconProps } from "../Icon";

export type MediumLineProps = Omit<IconProps, "name">;

export const MediumLine = (props: MediumLineProps) => (
  <Icon name="medium-line" {...props} />
);
