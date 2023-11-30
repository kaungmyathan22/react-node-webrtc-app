import { Input } from "@/components/Input/Input";

export function OnboardingForm({}) {
  return (
    <div className=" flex flex-col justify-center ">
      <h1 className="text-white text-2xl font-semibold mb-11">
        Start creating your room!
      </h1>
      <div className="flex flex-col gap-y-5">
        <Input label="Username" />
        {/* <Input label="Room" /> */}
      </div>
      <div className="flex items-center gap-x-4 mt-16">
        <button className="bg-white py-4 flex-1 text-greenish text-sm font-semibold rounded-lg">
          Create Room
        </button>
        <button className="text-white py-4 flex-1 bg-whitegrey text-sm font-semibold rounded-lg">
          Join Room
        </button>
      </div>
    </div>
  );
}
