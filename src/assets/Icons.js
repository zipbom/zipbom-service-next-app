import React from "react";

const REM_UNIT = 16;

export const MainLogo = React.memo(
  ({ width = 2.25, height = 1.3125, color = "#ffffff" }) => {
    const defaultWidth = 36;
    const defaultHeight = 21;

    const icon = (
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        viewBox={`0 0 ${width * REM_UNIT} ${height * REM_UNIT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="21" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_375_4025"
              transform="translate(-0.000514403) scale(0.00720165 0.0123457)"
            />
          </pattern>
          <image
            id="image0_375_4025"
            width="139"
            height="81"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );

    return icon;
  },
);
