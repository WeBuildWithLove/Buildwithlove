/* eslint-disable @next/next/no-img-element */
import { BsPersonWorkspace } from "react-icons/bs";

type VisionComponentProp = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  img?: string;
  bullets?: string[];
};

const VisionComponent = ({
  title,
  description,
  icon,
  img,
  bullets,
}: VisionComponentProp) => {
  return (
    <div className="max-w-[600px] border border-solid border-[#E1E1E1] rounded-xl px-4 py-4 md:px-8 md:py-8 flex flex-col gap-3">
      <div className="w-8 h-8 md:w-[63px] md:h-[63px] rounded-[4px] md:rounded-xl bg-[#EBEEFC] flex items-center justify-center">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain rounded-[4px] md:rounded-xl"
          />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-xs md:text-2xl text-[#100322] font-bold">{title}</h3>
      <p className="text-[#323337] md:leading-[28px] text-[10px] md:text-base">
        {description}
      </p>
      {bullets && (
        <ul className="list-disc list-inside text-[#323337] text-[10px] md:text-base custom-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisionComponent;
