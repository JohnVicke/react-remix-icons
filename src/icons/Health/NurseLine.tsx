import React from "react";
import { Icon, IconProps } from "../Icon";

export type NurseLineProps = Omit<IconProps, "name">;

export const NurseLine = (props: NurseLineProps) => (
  <Icon name="nurse-line" {...props} />
);
