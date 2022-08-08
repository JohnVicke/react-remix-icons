import React from "react";
import { Icon, IconProps } from "../Icon";

export type PsychotherapyLineProps = Omit<IconProps, "name">;

export const PsychotherapyLine = (props: PsychotherapyLineProps) => (
  <Icon name="psychotherapy-line" {...props} />
);
