import React from "react";
import { Icon, IconProps } from "../Icon";

export type SailboatFillProps = Omit<IconProps, "name">;

export const SailboatFill = (props: SailboatFillProps) => (
  <Icon name="sailboat-fill" {...props} />
);
