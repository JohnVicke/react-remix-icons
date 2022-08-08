import React from "react";
import { Icon, IconProps } from "../Icon";

export type TextDirectionRProps = Omit<IconProps, "name">;

export const TextDirectionR = (props: TextDirectionRProps) => (
  <Icon name="text-direction-r" {...props} />
);
