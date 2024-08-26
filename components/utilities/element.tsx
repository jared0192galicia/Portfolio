import cn from "@/service/clsx";

export default function Element({ children, header }: any) {
  const baseClassText: string = "text-white font-extaligth";
  return (
    <>
      <div className="">
        <h3 className={cn(baseClassText, "text-2xl")}>{header} hoa</h3>
        {/* {children} */}
      </div>
    </>
  );
}
