import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloseCircleLineProps = Omit<IconProps, "name">;

export const CloseCircleLine = (props: CloseCircleLineProps) => (
  <Icon name="close-circle-line" {...props} />
);
