import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClosedCaptioningFillProps = Omit<IconProps, "name">;

export const ClosedCaptioningFill = (props: ClosedCaptioningFillProps) => (
  <Icon name="closed-captioning-fill" {...props} />
);
