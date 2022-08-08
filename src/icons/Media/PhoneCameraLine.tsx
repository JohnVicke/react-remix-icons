import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneCameraLineProps = Omit<IconProps, "name">;

export const PhoneCameraLine = (props: PhoneCameraLineProps) => (
  <Icon name="phone-camera-line" {...props} />
);
