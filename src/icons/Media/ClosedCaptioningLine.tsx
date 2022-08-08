import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClosedCaptioningLineProps = Omit<IconProps, "name">;

export const ClosedCaptioningLine = (props: ClosedCaptioningLineProps) => (
  <Icon name="closed-captioning-line" {...props} />
);
