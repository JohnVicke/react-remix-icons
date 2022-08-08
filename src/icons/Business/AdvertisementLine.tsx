import React from "react";
import { Icon, IconProps } from "../Icon";

export type AdvertisementLineProps = Omit<IconProps, "name">;

export const AdvertisementLine = (props: AdvertisementLineProps) => (
  <Icon name="advertisement-line" {...props} />
);
