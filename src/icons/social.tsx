import * as React from "react";
import { SVGProps } from "react";

export const TwitterIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20">
      <title>{"twitter [#154]"}</title>
      <path
        fillRule="evenodd"
        d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812"
        className="h-6 w-6 text-dark hover:text-red-600"
      />
    </svg>
  );
};

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <title>{"github [#142]"}</title>
    <path
      className="h-6 w-6 fill-dark hover:fill-red-600"
      fillRule="evenodd"
      d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
    />
  </svg>
);

export const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <title>{"linkedin [#161]"}</title>
    <path
      className="h-6 w-6 fill-dark hover:fill-red-600"
      fillRule="evenodd"
      d="M20 20h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V20H7V7h4v1.462s1.255-2.202 4.083-2.202C17.912 6.26 20 7.986 20 11.558V20ZM2.442 4.921A2.451 2.451 0 0 1 0 2.46 2.451 2.451 0 0 1 2.442 0a2.451 2.451 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461ZM0 20h5V7H0v13Z"
    />
  </svg>
);

export const MediumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1b1b1b"
      d="M13.41 12.247c0 3.45-2.779 6.247-6.205 6.247C3.778 18.494 1 15.698 1 12.247S3.778 6 7.205 6c3.426 0 6.204 2.797 6.204 6.247Zm6.806 0c0 3.248-1.39 5.88-3.102 5.88-1.714 0-3.103-2.633-3.103-5.88s1.39-5.88 3.103-5.88c1.713 0 3.102 2.633 3.102 5.88Zm2.784 0c0 2.91-.489 5.269-1.091 5.269-.603 0-1.091-2.36-1.091-5.269 0-2.91.488-5.269 1.091-5.269S23 9.338 23 12.248Z"
      className="h-6 w-6"
    />
  </svg>
);
