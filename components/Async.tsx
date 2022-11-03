import { css } from "@emotion/core";
import isArray from "lodash/isArray";
import React from "react";

interface IError {
  message: string;
}

interface IProps<T> {
  branch: { data?: T; error?: IError };
  renderError?: (error: IError) => JSX.Element;
  renderLoading?: () => JSX.Element;
  renderData: (data: T) => JSX.Element;
  renderEmpty?: () => JSX.Element;
  minHeight?: string;
}

// export const Loading = ({ minHeight }: { minHeight?: string }) => {
//   return (
//     <div
//       css={css`
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         min-height: ${minHeight};
//       `}
//     >
//       <p>Loading...</p>
//     </div>
//   );
// };

export const ErrorMessage = ({ error, minHeight }: { error: IError; minHeight?: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: ${minHeight};
      `}
    >
      <p
        css={css`
          color: red;
        `}
      >
        {error.message}
      </p>

      <button onClick={() => window && window.location.reload()}>Refresh page</button>
    </div>
  );
};

export const EmptyList = ({ minHeight }: { minHeight?: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: ${minHeight};
      `}
    >
      <p>No data.</p>
    </div>
  );
};

export function Async<T>({ branch, renderError, renderLoading, renderEmpty, renderData, minHeight }: IProps<T>) {
  const { data, error } = branch;

  if (error) {
    return renderError ? renderError(error) : <ErrorMessage minHeight={minHeight} error={error} />;
  }

  if (!data) {
    return renderLoading ? renderLoading() : null;
  }

  if (isArray(data) && data.length === 0) {
    return renderEmpty ? renderEmpty() : <EmptyList minHeight={minHeight} />;
  }

  return renderData(data);
}
