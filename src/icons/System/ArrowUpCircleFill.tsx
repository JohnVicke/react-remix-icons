import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpCircleFillProps = Omit<IconProps, "name">;

export const ArrowUpCircleFill = (props: ArrowUpCircleFillProps) => (
  <Icon name="arrow-up-circle-fill" {...props} />
);
