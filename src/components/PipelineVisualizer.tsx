
import React from 'react';
import { PipelineData } from '@/data/pipelineData';
import StepCard from './StepCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, GitCommit, GitBranch } from 'lucide-react';

interface PipelineVisualizerProps {
  pipeline: PipelineData;
}

const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({ pipeline }) => {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-accent text-accent-foreground';
      case 'running':
        return 'bg-primary text-primary-foreground';
      case 'failed':
        return 'bg-destructive text-destructive-foreground';
      case 'pending':
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-3">
            <CardTitle>{pipeline.name}</CardTitle>
            <Badge className={getStatusBadgeColor(pipeline.status)}>
              {pipeline.status.charAt(0).toUpperCase() + pipeline.status.slice(1)}
            </Badge>
          </div>
          
          <div className="flex gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <GitBranch size={14} />
              <span>{pipeline.branch}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitCommit size={14} />
              <span>{pipeline.commit}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Started {new Date(pipeline.startedAt).toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-0 pb-6">
          {pipeline.steps.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              isLast={index === pipeline.steps.length - 1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PipelineVisualizer;
