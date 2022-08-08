import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandHeartLineProps = Omit<IconProps, "name">;

export const HandHeartLine = (props: HandHeartLineProps) => (
  <Icon name="hand-heart-line" {...props} />
);
