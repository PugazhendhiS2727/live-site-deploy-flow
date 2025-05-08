
import React from 'react';
import { Check, X, Loader2, Clock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { PipelineStep } from '@/data/pipelineData';

interface StepCardProps {
  step: PipelineStep;
  isLast?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, isLast = false }) => {
  // Dynamically get icon from Lucide based on icon name
  const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.Box;
  
  const getStatusIcon = () => {
    switch (step.status) {
      case 'success':
        return <Check className="text-white bg-accent rounded-full p-1" size={20} />;
      case 'failed':
        return <X className="text-white bg-destructive rounded-full p-1" size={20} />;
      case 'running':
        return <Loader2 className="text-white bg-primary rounded-full p-1 animate-spin" size={20} />;
      case 'pending':
      default:
        return <Clock className="text-white bg-muted-foreground rounded-full p-1" size={20} />;
    }
  };

  return (
    <div className="pipeline-step w-full">
      <div className={cn(
        "border rounded-lg p-4 transition-all duration-300",
        "pipeline-step",
        `${step.status}`
      )}>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-muted p-2">
            <IconComponent size={24} className="text-primary" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">{step.name}</h3>
              <div>{getStatusIcon()}</div>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
            
            {step.duration && (
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                <span>{step.duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {!isLast && <div className="pipeline-connector" />}
    </div>
  );
};

export default StepCard;
