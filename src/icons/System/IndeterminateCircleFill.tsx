import React from "react";
import { Icon, IconProps } from "../Icon";

export type IndeterminateCircleFillProps = Omit<IconProps, "name">;

export const IndeterminateCircleFill = (
  props: IndeterminateCircleFillProps
) => <Icon name="indeterminate-circle-fill" {...props} />;
