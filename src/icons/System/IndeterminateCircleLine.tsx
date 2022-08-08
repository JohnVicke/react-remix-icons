import React from "react";
import { Icon, IconProps } from "../Icon";

export type IndeterminateCircleLineProps = Omit<IconProps, "name">;

export const IndeterminateCircleLine = (
  props: IndeterminateCircleLineProps
) => <Icon name="indeterminate-circle-line" {...props} />;
