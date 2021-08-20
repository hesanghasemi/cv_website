import Icon from "@ant-design/icons";

const StudySVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path d="M11 8h2v1h-2z" fill="currentColor" />
      <path d="M11 4h2v1h-2z" fill="currentColor" />
      <path d="M11 10h2v1h-2z" fill="currentColor" />
      <path
        d="M21 12V9a13.124 13.124 0 0 0-8.354 3h-1.292A13.124 13.124 0 0 0 3 9v3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v4a13.153 13.153 0 0 1 9 3.55A13.2 13.2 0 0 1 21 20v-4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
        fill="currentColor"
      />
      <circle cx="9" cy="4" r="1" fill="currentColor" />
      <circle cx="15" cy="4" r="1" fill="currentColor" />
      <path
        d="M16 8H8a3.003 3.003 0 0 1-3-3V3a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v2a3.003 3.003 0 0 1-3 3zM8 2a1.001 1.001 0 0 0-1 1v2a1.001 1.001 0 0 0 1 1h8a1.001 1.001 0 0 0 1-1V3a1.001 1.001 0 0 0-1-1z"
        fill="currentColor"
      />
    </svg>
  );
};

const StudyIcon = (props) => {
  return <Icon component={StudySVG} {...props} />;
};

export default StudyIcon;
