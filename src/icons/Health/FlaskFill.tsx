import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlaskFillProps = Omit<IconProps, "name">;

export const FlaskFill = (props: FlaskFillProps) => (
  <Icon name="flask-fill" {...props} />
);
