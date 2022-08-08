import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlutterLineProps = Omit<IconProps, "name">;

export const FlutterLine = (props: FlutterLineProps) => (
  <Icon name="flutter-line" {...props} />
);
