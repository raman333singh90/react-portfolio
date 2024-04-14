export default function ServicesIcon({ classes, path, viewBox }) {
  return (
    <div className={`icon ${classes}`}>
      <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-code"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path}></path>
      </svg>
    </div>
  );
}
