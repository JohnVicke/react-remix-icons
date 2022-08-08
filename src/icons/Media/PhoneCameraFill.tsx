import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneCameraFillProps = Omit<IconProps, "name">;

export const PhoneCameraFill = (props: PhoneCameraFillProps) => (
  <Icon name="phone-camera-fill" {...props} />
);
