import React from "react";
import { Icon, IconProps } from "../Icon";

export type TextDirectionLProps = Omit<IconProps, "name">;

export const TextDirectionL = (props: TextDirectionLProps) => (
  <Icon name="text-direction-l" {...props} />
);
