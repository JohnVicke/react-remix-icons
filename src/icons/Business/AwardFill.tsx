import React from "react";
import { Icon, IconProps } from "../Icon";

export type AwardFillProps = Omit<IconProps, "name">;

export const AwardFill = (props: AwardFillProps) => (
  <Icon name="award-fill" {...props} />
);
