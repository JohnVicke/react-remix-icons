import React from "react";
import { Icon, IconProps } from "../Icon";

export type DribbbleFillProps = Omit<IconProps, "name">;

export const DribbbleFill = (props: DribbbleFillProps) => (
  <Icon name="dribbble-fill" {...props} />
);
