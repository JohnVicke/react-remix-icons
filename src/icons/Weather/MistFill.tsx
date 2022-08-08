import React from "react";
import { Icon, IconProps } from "../Icon";

export type MistFillProps = Omit<IconProps, "name">;

export const MistFill = (props: MistFillProps) => (
  <Icon name="mist-fill" {...props} />
);
