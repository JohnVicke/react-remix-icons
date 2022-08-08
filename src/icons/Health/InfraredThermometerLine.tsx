import React from "react";
import { Icon, IconProps } from "../Icon";

export type InfraredThermometerLineProps = Omit<IconProps, "name">;

export const InfraredThermometerLine = (
  props: InfraredThermometerLineProps
) => <Icon name="infrared-thermometer-line" {...props} />;
