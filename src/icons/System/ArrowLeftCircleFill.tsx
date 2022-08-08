import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftCircleFillProps = Omit<IconProps, "name">;

export const ArrowLeftCircleFill = (props: ArrowLeftCircleFillProps) => (
  <Icon name="arrow-left-circle-fill" {...props} />
);
