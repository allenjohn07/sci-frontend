/* eslint-disable react/prop-types */
import Countdown from "react-countdown";

const logo = "https://sci-assets.s3.eu-north-1.amazonaws.com/sci-logo.png";

const CountdownRenderer = ({ formatted }) => {
  return (
    <div className="font-bold text-large bg-blue-50 rounded-md px-10 py-2 mt-2">
      {formatted.days > 0 && <span>{formatted.days}d </span>}
      <span>{formatted.hours}h </span>
      <span>{formatted.minutes}m </span>
      <span>{formatted.seconds}s</span>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="flex items-center w-full justify-center h-screen">
      <div className="text-center space-y-2">
        <div className="-space-y-3">
          <div className="flex justify-center">
            <img className="w-[80px]" src={logo} alt="SCI-Logo" />
          </div>
          <h1 className="text-4xl font-bold">Coming Soon</h1>
        </div>
        <p className="text-gray-600 px-5">
          We&apos;re working hard to bring you something amazing.
        </p>
        <div className="flex justify-center">
          <Countdown
            date={new Date("2025-03-16T06:30:00.000Z")}
            renderer={CountdownRenderer}
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
