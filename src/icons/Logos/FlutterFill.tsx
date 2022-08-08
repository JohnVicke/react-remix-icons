import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlutterFillProps = Omit<IconProps, "name">;

export const FlutterFill = (props: FlutterFillProps) => (
  <Icon name="flutter-fill" {...props} />
);
