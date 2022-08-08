import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrainWifiLineProps = Omit<IconProps, "name">;

export const TrainWifiLine = (props: TrainWifiLineProps) => (
  <Icon name="train-wifi-line" {...props} />
);
