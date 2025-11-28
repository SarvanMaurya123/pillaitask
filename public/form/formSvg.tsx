export const EyeOpenSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-[#777]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeCloseSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-[#777]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3l18 18M10.584 10.587A3 3 0 0113.41 13.41M9.88 4.596A9.956 9.956 0 0112 4.5c6 0 10.5 7.5 10.5 7.5a20.25 20.25 0 01-3.75 4.77M6.228 6.23C3.72 8.213 1.5 12 1.5 12a20.17 20.17 0 004.87 5.36"
    />
  </svg>
);

export const LoaderSvg = () => (
  <svg
    className="animate-spin h-5 w-5 inline-block ml-2 text-white"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);
