import React from "react";
import { Icon, IconProps } from "../Icon";

export type RhythmFillProps = Omit<IconProps, "name">;

export const RhythmFill = (props: RhythmFillProps) => (
  <Icon name="rhythm-fill" {...props} />
);
