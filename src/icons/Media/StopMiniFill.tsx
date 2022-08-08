import React from "react";
import { Icon, IconProps } from "../Icon";

export type StopMiniFillProps = Omit<IconProps, "name">;

export const StopMiniFill = (props: StopMiniFillProps) => (
  <Icon name="stop-mini-fill" {...props} />
);
