export function parseNumber(value: string | string[] | number | undefined, defaultValue = 0) {
  if (!value) {
    return defaultValue;
  }
  const val = parseInt(value.toString());
  return isNaN(val) ? defaultValue : val;
}

export const isDev = process.env.NODE_ENV === "development";

export const isProd = !isDev;
