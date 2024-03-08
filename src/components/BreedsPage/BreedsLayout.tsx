import React from "react";
import BreedContent from "./BreedContent";
import { BreedProvider } from "@/components/BreedsPage/BreedProvider";

type BreedsLayoutProps = {
  breedName: string | null;
  id: string | null;
};

const BreedsLayout: React.FC<BreedsLayoutProps> = ({ breedName, id }) => {
  return (
    <div className="container">
      <BreedProvider>
        {breedName ? (
          <div className="grid grid-cols-3 gap-12">
            <div className="bg-slate-200 h-[600px] col-span-2">
              <BreedContent breedName={breedName} id={id} />
            </div>
            <div className="bg-slate-200"></div>
          </div>
        ) : (
          <p>No breed selected.</p>
        )}
      </BreedProvider>
    </div>
  );
};

export default BreedsLayout;
