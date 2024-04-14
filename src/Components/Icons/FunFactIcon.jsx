export default function FunFactIcon({ classes, path, viewBox }) {
  return (
    <div className={`icon ${classes}`}>
      <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-compact-disc"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path}></path>
      </svg>
    </div>
  );
}
