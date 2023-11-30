import { OnboardingForm } from "../../components/OnboardingForm/OnboardingForm";

const Onboarding = () => {
  return (
    <div className="flex flex-row items-center min-h-screen max-w-4xl mx-auto gap-x-4">
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl text-greenish font-semibold">
          PWAR<span className="text-grey-3">MAL</span>
        </h2>
        <p className="text-lg text-grey-4 font-normal mt-8 text-justify">
          PwarMal is a video videoconferencing and voice calls platform. It also
          has instant messaging, file transfer, and other features.
        </p>
        <p className="text-grey-1 text-base font-normal mt-7">
          Treat someone with excessive attention, solicitude, or affection.
        </p>
      </div>
      <div className="flex-1 rounded-2xl gradient px-16 py-16">
        <OnboardingForm />
      </div>
    </div>
  );
};

export default Onboarding;
