import React from "react";
import { Icon, IconProps } from "../Icon";

export type AwardLineProps = Omit<IconProps, "name">;

export const AwardLine = (props: AwardLineProps) => (
  <Icon name="award-line" {...props} />
);
