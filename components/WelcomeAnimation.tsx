import { css, keyframes } from "@emotion/core";
import { useEffect, useState } from "react";

const fadeOut = keyframes`
  0% { 
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  95% { 
    opacity: 0;
  }
  100% { 
    opacity: 0;
  }
`;

export const WelcomeAnimation = () => {
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      css={css`
        width: 100vw;
        height: 102vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        z-index: 99999999;
        background-color: white;
        ${started &&
          css`
            animation: ${fadeOut} 5.1s ease;
          `}
        ${ended &&
          css`
            display: none;
          `}
      `}
    >
      <video
        css={css`
          width: 440px;
          height: 250px;
        `}
        autoPlay={true}
        muted
        playsInline
        onPlay={() => {
          setStarted(true);
        }}
        onEnded={() => {
          setEnded(true);
          document.body.style.overflow = "auto";
        }}
      >
        <source src="/static/welcome.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
