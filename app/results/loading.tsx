import "./loading.css";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-between max-w-md min-h-screen p-24 mx-auto">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
