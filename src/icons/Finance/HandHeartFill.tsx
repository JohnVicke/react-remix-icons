import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandHeartFillProps = Omit<IconProps, "name">;

export const HandHeartFill = (props: HandHeartFillProps) => (
  <Icon name="hand-heart-fill" {...props} />
);
