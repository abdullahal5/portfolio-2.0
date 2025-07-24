import { services } from "@/data";
import { BentoGrid, BentoGridItem } from "./services/bento-grid";
import SectionTitle from "../shared/title/SectionTitle";

const Services = () => {
  return (
    <div>
      <SectionTitle title="Services" />
      <BentoGrid>
        {services.map((gridItem) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Services;
