import React from "react";
import { Icon, IconProps } from "../Icon";

export type MiniProgramLineProps = Omit<IconProps, "name">;

export const MiniProgramLine = (props: MiniProgramLineProps) => (
  <Icon name="mini-program-line" {...props} />
);
