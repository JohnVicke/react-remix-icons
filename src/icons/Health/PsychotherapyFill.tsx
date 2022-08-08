import React from "react";
import { Icon, IconProps } from "../Icon";

export type PsychotherapyFillProps = Omit<IconProps, "name">;

export const PsychotherapyFill = (props: PsychotherapyFillProps) => (
  <Icon name="psychotherapy-fill" {...props} />
);
