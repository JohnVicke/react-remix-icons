import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShuffleFillProps = Omit<IconProps, "name">;

export const ShuffleFill = (props: ShuffleFillProps) => (
  <Icon name="shuffle-fill" {...props} />
);
