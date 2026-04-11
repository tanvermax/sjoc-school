import React from "react";
import { cn } from "@/lib/utils";

interface MosqueIconProps {
  className?: string;
  strokeColor?: string;
  size?: number;
}

export const MosqueIcon: React.FC<MosqueIconProps> = ({
  className,
  strokeColor = "#0d5c4a",
  size = 120,
}) => (
  <svg
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M60 15 L60 25"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M56 25 C56 22 64 22 64 25 L66 38 C64 35 56 35 54 38 Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M46 45 C46 38 74 38 74 45 L74 52 Q60 46 46 52 Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="26"
      y="52"
      width="68"
      height="38"
      rx="2"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M38 90 L38 65 C38 61.5 42 58 46 58 C50 58 54 61.5 54 65 L54 90"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M38 72 L54 72"
      stroke={strokeColor}
      strokeWidth="1"
      strokeDasharray="2 2"
    />
    <rect
      x="58"
      y="64"
      width="16"
      height="26"
      rx="1"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M26 52 L30 38 L34 52"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M90 52 L94 38 L98 52"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export const PersonIcon: React.FC<{ strokeColor?: string }> = ({
  strokeColor = "#0d5c4a",
}) => (
  <svg viewBox="0 0 36 36" width={36} height={36} fill="none">
    <circle cx="18" cy="14" r="7" stroke={strokeColor} strokeWidth="1.5" />
    <path
      d="M4 34c0-7.7 6.3-14 14-14s14 6.3 14 14"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);