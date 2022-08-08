import React from "react";
import { Icon, IconProps } from "../Icon";

export type SailboatLineProps = Omit<IconProps, "name">;

export const SailboatLine = (props: SailboatLineProps) => (
  <Icon name="sailboat-line" {...props} />
);
