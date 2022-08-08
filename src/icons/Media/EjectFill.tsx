import React from "react";
import { Icon, IconProps } from "../Icon";

export type EjectFillProps = Omit<IconProps, "name">;

export const EjectFill = (props: EjectFillProps) => (
  <Icon name="eject-fill" {...props} />
);
