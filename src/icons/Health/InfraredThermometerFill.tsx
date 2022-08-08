import React from "react";
import { Icon, IconProps } from "../Icon";

export type InfraredThermometerFillProps = Omit<IconProps, "name">;

export const InfraredThermometerFill = (
  props: InfraredThermometerFillProps
) => <Icon name="infrared-thermometer-fill" {...props} />;
