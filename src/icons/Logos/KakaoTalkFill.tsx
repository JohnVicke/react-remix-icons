import React from "react";
import { Icon, IconProps } from "../Icon";

export type KakaoTalkFillProps = Omit<IconProps, "name">;

export const KakaoTalkFill = (props: KakaoTalkFillProps) => (
  <Icon name="kakao-talk-fill" {...props} />
);
