import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloseLineProps = Omit<IconProps, "name">;

export const CloseLine = (props: CloseLineProps) => (
  <Icon name="close-line" {...props} />
);
