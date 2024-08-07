import { BsPersonWorkspace } from "react-icons/bs";

type VisionComponentProp = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const VisionComponent = ({ title, description, icon }: VisionComponentProp) => {
  return (
    <div className="max-w-[600px] border border-solid border-[#E1E1E1] rounded-xl px-4 py-4 md:px-8 md:py-8 flex flex-col gap-3">
      <div className="w-8 h-8 md:w-[63px] md:h-[63px] rounded-[4px] md:rounded-xl bg-[#EBEEFC] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xs md:text-2xl text-[#100322] font-bold">{title}</h3>
      <p className="text-[#323337] md:leading-[28px] text-[10px] md:text-base">{description}</p>
    </div>
  );
};

export default VisionComponent;
