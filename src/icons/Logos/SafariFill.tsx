import React from "react";
import { Icon, IconProps } from "../Icon";

export type SafariFillProps = Omit<IconProps, "name">;

export const SafariFill = (props: SafariFillProps) => (
  <Icon name="safari-fill" {...props} />
);
