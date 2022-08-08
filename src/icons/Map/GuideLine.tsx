import React from "react";
import { Icon, IconProps } from "../Icon";

export type GuideLineProps = Omit<IconProps, "name">;

export const GuideLine = (props: GuideLineProps) => (
  <Icon name="guide-line" {...props} />
);
