export function Input({ label }: any) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <label className="text-white text-sm font-normal">{label}</label>
      <input
        type="text"
        className="rounded-lg border border-white bg-whitegrey h-12 w-full"
      />
    </div>
  );
}
