import React from "react";
import { Icon, IconProps } from "../Icon";

export type EjectLineProps = Omit<IconProps, "name">;

export const EjectLine = (props: EjectLineProps) => (
  <Icon name="eject-line" {...props} />
);
