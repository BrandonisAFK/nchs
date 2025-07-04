import { Hammer, Paintbrush2, Wrench, Home } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Circular border with gradient */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
          {/* House rooflines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Multiple house peaks */}
              <div className="flex items-end space-x-0.5">
                <div className="w-3 h-3 bg-neutral-dark transform rotate-45 -mb-1"></div>
                <div className="w-4 h-4 bg-neutral-dark transform rotate-45 -mb-1"></div>
                <div className="w-3 h-3 bg-neutral-dark transform rotate-45 -mb-1"></div>
              </div>
              
              {/* House base */}
              <div className="w-8 h-3 bg-neutral-dark/80 rounded-b-sm"></div>
              
              {/* Tools arranged above houses */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                <Hammer className="w-2.5 h-2.5 text-neutral-dark rotate-12" />
                <Paintbrush2 className="w-2.5 h-2.5 text-neutral-dark -rotate-12" />
                <Wrench className="w-2.5 h-2.5 text-neutral-dark rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};