import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignLeftProps = Omit<IconProps, "name">;

export const AlignLeft = (props: AlignLeftProps) => (
  <Icon name="align-left" {...props} />
);
