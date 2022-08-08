import React from "react";
import { Icon, IconProps } from "../Icon";

export type StopCircleFillProps = Omit<IconProps, "name">;

export const StopCircleFill = (props: StopCircleFillProps) => (
  <Icon name="stop-circle-fill" {...props} />
);
