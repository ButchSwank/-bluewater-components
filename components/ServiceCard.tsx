import React from "react";
import * as LucideIcons from "lucide-react";
import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package;

  return (
    <div className="card group bg-white rounded-2xl overflow-hidden flex flex-col h-full">
      {service.image && (
        <div className="relative h-48 overflow-hidden bg-silver-200">
          <img 
            src={service.image} 
            alt={service.title}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
        </div>
      )}
      
      <div className="p-7 flex flex-col flex-1">
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
          <IconComponent size={22} />
        </div>
        
        <h3 className="font-semibold text-2xl tracking-tight mb-3 text-navy-900">{service.title}</h3>
        
        <p className="text-silver-500 leading-relaxed text-[15px] mb-6 flex-1">
          {service.description}
        </p>

        <ul className="space-y-2 pt-4 border-t border-silver-100">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-navy-800 gap-2.5">
              <div className="w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
