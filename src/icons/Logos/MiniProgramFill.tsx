import React from "react";
import { Icon, IconProps } from "../Icon";

export type MiniProgramFillProps = Omit<IconProps, "name">;

export const MiniProgramFill = (props: MiniProgramFillProps) => (
  <Icon name="mini-program-fill" {...props} />
);
