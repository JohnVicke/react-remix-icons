import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloseCircleFillProps = Omit<IconProps, "name">;

export const CloseCircleFill = (props: CloseCircleFillProps) => (
  <Icon name="close-circle-fill" {...props} />
);
