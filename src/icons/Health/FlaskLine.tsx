import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlaskLineProps = Omit<IconProps, "name">;

export const FlaskLine = (props: FlaskLineProps) => (
  <Icon name="flask-line" {...props} />
);
