import React from "react";
import { Icon, IconProps } from "../Icon";

export type RhythmLineProps = Omit<IconProps, "name">;

export const RhythmLine = (props: RhythmLineProps) => (
  <Icon name="rhythm-line" {...props} />
);
